import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi } from "twitter-api-v2";
import { defaultAppTokens } from "lib/config";
import prisma from "lib/prisma-client";
import { sendMessageToTwitterUser } from "lib/helpers";
import { MESSAGES } from "utils/content";

export default withIronSessionApiRoute(authRoute, sessionOptions);

async function authRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Invalid request
    if (!req.query.oauth_token || !req.query.oauth_verifier) {
      return res.status(400).json({
        status: "error",
        message:
          "Bad request, or you denied application access. Please renew your request.",
      });
    }

    // console.log({ oauth_token: req.query.oauth_token, session: req.session });

    const token = req.query.oauth_token as string;
    const verifier = req.query.oauth_verifier as string;
    const savedToken = req.session.oauthToken;
    const savedSecret = req.session.oauthSecret;

    if (!savedToken || !savedSecret || savedToken !== token) {
      req.session.destroy();

      return res.status(401).json({
        status: "error",
        message:
          "OAuth token is not known or invalid. Your request may have expire. Please renew the auth process.",
      });
    }

    // Build a temporary client to get access token
    const tempClient = new TwitterApi({
      ...defaultAppTokens,
      accessToken: token,
      accessSecret: savedSecret,
    });

    // Ask for definitive access token
    const {
      userId: twitterUserId,
      accessToken,
      accessSecret,
      client: userClient,
    } = await tempClient.login(verifier);

    const { data: userData } = await userClient.v2.me({
      "user.fields":
        "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld",
    });

    const data = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      url: userData.url,
      location: userData.location,
      description: userData.description,
      profile_image_url: userData.profile_image_url,
    };

    // Remove temporary OAuth Token and OAuth Secret stored earlier
    req.session.oauthToken = "";
    req.session.oauthSecret = "";

    // Check if user has been saved added to database
    let userDetails = await prisma.users.findFirst({
      where: {
        twitter_user_id: data.id,
      },
    });

    // If user has no data in the database, add them to DB
    if (!userDetails) {
      // Add User to Database
      userDetails = await prisma.users.create({
        data: {
          twitter_user_id: twitterUserId,
          username: data.username,
        },
      });

      await sendMessageToTwitterUser(
        userDetails!.twitter_user_id,
        MESSAGES.SENT_TO_NEWLY_REGISTERED_USER
      ).catch((err) =>
        console.log("Error Sending Welcome Message to User", err.data.errors)
      );
    }

    // Save newly generated access token and access secret
    req.session.userId = userDetails.id;
    req.session.twitterUserId = twitterUserId;
    req.session.accessToken = accessToken;
    req.session.accessSecret = accessSecret;
    req.session.user = { ...data, isAuthenticated: true };

    await req.session.save();

    return res.redirect("/");
  } catch (error: any) {
    console.log(error.data.errors);
    return res.status(500).json({ message: (error as Error).message });
  }
}

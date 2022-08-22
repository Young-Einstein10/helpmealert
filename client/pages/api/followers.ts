import { defaultAppTokens } from "lib/config";
import cacheData from "memory-cache";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi, UserV2TimelineResult } from "twitter-api-v2";

export type Followers = UserV2TimelineResult["data"];

interface ErrorMessage {
  status: "error";
  message: string;
}

export default withIronSessionApiRoute(followersRoute, sessionOptions);

async function followersRoute(
  req: NextApiRequest,
  res: NextApiResponse<Followers | ErrorMessage>
) {
  const user = req.session.user;

  if (!user || user.isAuthenticated === false) {
    res.status(401).end();
    return;
  }

  try {
    const { accessToken, accessSecret, userId, twitterUserId } = req.session;

    if (!accessToken || !accessSecret || !twitterUserId || !userId) {
      return res.status(403).send({
        status: "error",
        message: "Authorization credentials are absent.",
      });
    }

    // In-memory cache system to avoid exceeding the number of requests made to the Twitter API. Cache should revalidate evry hour or whenever the server is restarted.
    const value = cacheData.get("followers");

    if (value) {
      console.log("Followers returned from cache");
      return res.status(200).send(value);
    }

    const userClient = new TwitterApi({
      ...defaultAppTokens,
      accessToken,
      accessSecret,
    });

    const { data } = await userClient.v2.followers(twitterUserId, {
      max_results: 1000,
    });

    const hours = 1;

    cacheData.put("followers", data, hours * 1000 * 60 * 60);

    console.log("Followers returned from Twitter");

    return res.status(200).send(data);
  } catch (error) {
    console.error(error);

    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

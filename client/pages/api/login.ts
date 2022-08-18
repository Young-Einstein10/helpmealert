import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi } from "twitter-api-v2";
import requestClient, {
  defaultAppTokens,
  TWITTER_CALLBACK_URL,
} from "lib/config";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { accessToken, accessSecret, userId } = req.session;

    // User Credentials present
    if (accessToken && accessSecret && userId) {
      const userClient = new TwitterApi({
        ...defaultAppTokens,
        accessToken,
        accessSecret,
      });

      const { data } = await userClient.currentUserV2();

      req.session.user = { ...data, isAuthenticated: true };

      await req.session.save();

      return res.redirect("/");
    }

    const link = await requestClient.generateAuthLink(TWITTER_CALLBACK_URL);

    // Save token secret to use it after callback
    req.session.oauthToken = link.oauth_token;
    req.session.oauthSecret = link.oauth_token_secret;

    await req.session.save();

    return res.redirect(link.url);
  } catch (error) {
    return res
      .status(500)
      .json({
        status: "error",
        message: (error as Error).message,
        error: JSON.stringify(error),
      });
  }
}

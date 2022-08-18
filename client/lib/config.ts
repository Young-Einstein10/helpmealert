import { TwitterApi } from "twitter-api-v2";

export const defaultAppTokens = {
  appKey: process.env.CONSUMER_KEY as string,
  appSecret: process.env.CONSUMER_SECRET as string,
};

export const TWITTER_CALLBACK_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3000/api/auth"
    : "https://helpmenaija-client.vercel.app/api/auth";

// Create client used to generate auth links only
const requestClient = new TwitterApi({
  ...defaultAppTokens,
});

export default requestClient;

import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";

config();

const CONFIG = {
  PORT: process.env.PORT,

  // Twitter API configuration
  CONSUMER_KEY: process.env.CONSUMER_KEY,
  CONSUMER_SECRET: process.env.CONSUMER_SECRET,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  ACCESS_SECRET: process.env.ACCESS_SECRET,
  BEARER_TOKEN: process.env.BEARER_TOKEN,

  // Database configuration
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

export const TOKENS = {
  appKey: CONFIG.CONSUMER_KEY,
  appSecret: CONFIG.CONSUMER_SECRET,
};

// console.log(TOKENS);

// Create client used to generate auth links only
export const requestClient = new TwitterApi({ ...TOKENS });

export default CONFIG;

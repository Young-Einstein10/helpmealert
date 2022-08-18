import { Client } from "pg";
import CONFIG from "./config";

const client = new Client({
  user: CONFIG.DB_USERNAME,
  host: CONFIG.DB_HOST,
  database: CONFIG.DB_NAME,
  password: CONFIG.DB_PASSWORD,
  port: CONFIG.DB_PORT,
});

client.connect();

export default client;

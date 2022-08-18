import { TwitterApi } from "twitter-api-v2";
import { defaultAppTokens } from "lib/config";

const client = new TwitterApi({
  ...defaultAppTokens,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

/**
 * Handle sending a message to any twitter user.
 *
 * @param userId string
 * @param messageToBeSent string
 * @return <void>
 */
export async function sendMessageToTwitterUser(
  userId: string,
  messageToBeSent: string
) {
  console.log("INCOMING_PAYLOAD_TO_BE_SENT", { userId, messageToBeSent });

  await client.v1.sendDm({
    recipient_id: userId,
    text: messageToBeSent,
  });
}

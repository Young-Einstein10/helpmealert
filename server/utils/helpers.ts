import { TweetV2SingleResult, TwitterApi } from "twitter-api-v2";
import CONFIG, { TOKENS } from "../config";

import prisma from "../lib/prisma-client";

const BEARER_TOKEN = CONFIG.BEARER_TOKEN;
const WEBSITE_LINK = "https://helpmealert.vercel.app";
const BOT_USERNAME = "helpmealert";

export interface IUser {
  id: string;
  username: string;
  twitter_user_id: string;
  created_at?: string;
  updated_at?: string;
}

export interface IContact extends IUser {
  name: string;
  userId: string;
}

export const oauth1_0Client = new TwitterApi({
  ...TOKENS,
  accessToken: CONFIG.ACCESS_TOKEN,
  accessSecret: CONFIG.ACCESS_SECRET,
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

  await oauth1_0Client.v1.sendDm({
    recipient_id: userId,
    text: messageToBeSent,
  });
}

export const replyToNewUser = async (tweet: TweetV2SingleResult) => {
  try {
    console.log("Replied a tweet");

    await oauth1_0Client.v2.reply(
      `Welcome to HelpmeAlert BOT. Please click on the link below to set up your emergency contacts. ${WEBSITE_LINK}`,
      tweet.data.id
    );
  } catch (error) {
    console.log(error);
  }
};

export const checkIfUserIsRegistered = async (
  twitter_user_id: string
): Promise<{ isRegistered: boolean; user }> => {
  try {
    const users = await prisma.users.findFirst({
      where: {
        twitter_user_id,
      },
    });

    console.log(users);

    if (!users) {
      return { isRegistered: false, user: null };
    }

    return { isRegistered: true, user: users };
  } catch (error) {
    console.log(error);
  }
};

export const getUserEmergencyContact = async (user: any) => {
  try {
    console.log({ user: user });

    const contacts = await prisma.contacts.findMany({
      where: {
        users: user.id,
      },
    });

    console.log("Emergency Contacts", contacts);

    return contacts;
  } catch (error) {
    console.log(error);
  }
};

export const replyToRegisteredUser = async (
  tweet: TweetV2SingleResult,
  user: IUser
) => {
  try {
    // TODO: Send DM to Users (victim) emergency contacts.
    const emergencyContacts = await getUserEmergencyContact(user.id);

    const requests = emergencyContacts.map((contact) => {
      const message = `Hello @${contact.username}, @${user.username} just messaged us, they're in an emergency situation. Here's the content of the message sent:
      
      "${tweet.data.text}"
      `;

      return sendMessageToTwitterUser(contact.twitter_user_id, message).catch(
        (err) => {
          console.log("Error Sending Message to Contact", err);
        }
      );
    });

    await Promise.all(requests);

    const MESSAGE_SENT_TO_REGISTERED_USER = `Hello @${user.username}. Sorry to hear about your emergency. A message has already been sent to your emergency contacts to notify them about your situation.`;

    await sendMessageToTwitterUser(
      user.twitter_user_id,
      MESSAGE_SENT_TO_REGISTERED_USER
    );
  } catch (error) {
    console.log(error);
  }
};

export const sendConfirmationMessageToVictim = async (user: IUser) => {
  try {
    console.log("SENDING_CONFIRMATION_MESSAGE_TO_VICTIM", { userId: user.id });

    const messageToBeSent = `
    Hello Again @${user.username}, this is just a confirmation message to know if you're still in an emergency. Please respond to this message by answering 'Yes' or 'No' below.
    `;

    await oauth1_0Client.v1.sendDm({
      recipient_id: user.twitter_user_id,
      text: messageToBeSent,
    });
  } catch (error) {
    console.log(error.data);
  }
};

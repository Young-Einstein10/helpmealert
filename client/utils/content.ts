import { BOT_USERNAME, WEBSITE_LINK } from "./constants";

interface IMessageProps {
  SENT_TO_EMERGENCY_CONTACTS: {
    follower_username: string;
    bot_username?: string;
    sender_username: string;
  };
}

export const MESSAGES = {
  SENT_TO_EMERGENCY_CONTACTS: ({
    follower_username,
    bot_username = BOT_USERNAME,
    sender_username,
  }: IMessageProps["SENT_TO_EMERGENCY_CONTACTS"]) => `Hello, @${follower_username}, I am the @${bot_username} Safety BOT on Twitter. @${sender_username} has asked us to add you as a contact in case of an emergency. If they have an urgent situation, we will send you a direct message with any details they've provided. To find out more details on how this works, click on the link below to check out our website.
  ${WEBSITE_LINK}
    `,
  SENT_TO_NEWLY_REGISTERED_USER: `
   Hello There👋 and Welcome to the Helpme Twitter BOT. Your selected emergency contacts have been saved and notified, they will be your first point of contact on the twitter app whenever you have an emergency. Please click on the link below to check our website for more details on how we help with emergencies.

   ${WEBSITE_LINK}
   `,
};

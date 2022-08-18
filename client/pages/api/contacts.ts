import { Prisma } from "@prisma/client";
import { defaultAppTokens } from "lib/config";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi } from "twitter-api-v2";
import prisma from "lib/prisma-client";
import { sendMessageToTwitterUser } from "lib/helpers";
import { MESSAGES } from "utils/content";
import { BOT_USERNAME } from "utils/constants";

export type Contacts = Prisma.contactsCreateInput;

interface ErrorMessage {
  status: "error";
  message: string;
}

export default withIronSessionApiRoute(contactsRoute, sessionOptions);

async function contactsRoute(
  req: NextApiRequest,
  res: NextApiResponse<Contacts[] | ErrorMessage>
) {
  try {
    if (req.method === "GET") {
      await handleGetEmergencyContacts(req, res);
    }

    if (req.method === "POST") {
      await handleCreateEmergencyContacts(req, res);
    }
  } catch (error) {
    console.error(error);

    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

// GET /api/contacts
async function handleGetEmergencyContacts(
  req: NextApiRequest,
  res: NextApiResponse<Contacts[] | ErrorMessage>
) {
  const user = req.session.user;

  if (!user || user.isAuthenticated === false) {
    res.status(401).end();
    return;
  }

  const { accessToken, accessSecret, userId, twitterUserId } = req.session;

  if (!accessToken || !accessSecret || !userId || !twitterUserId) {
    return res.status(401).send({
      status: "error",
      message: "Unauthorized.",
    });
  }

  //   Get all contacts associated with the authenticated user
  const contacts = (await prisma.contacts.findMany({
    where: {
      userId: userId,
    },
    include: {
      users: true,
    },
  })) as Contacts[];

  return res.status(200).send(contacts);
}

const removeContact = async (twitter_user_id: string) => {
  if (!twitter_user_id) return;

  const contact = await prisma.contacts.findFirst({
    where: {
      twitter_user_id: twitter_user_id,
    },
  });

  if (contact) {
    await prisma.contacts.delete({
      where: {
        id: contact.id,
      },
    });
  }
};

// POST /api/contacts/
async function handleCreateEmergencyContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accessToken, accessSecret, userId, twitterUserId, user } =
    req.session;

  if (!accessToken || !accessSecret || !userId || !twitterUserId) {
    return res.status(401).send({
      status: "error",
      message: "Unauthorized.",
    });
  }

  const { twitter_user_ids } = JSON.parse(req.body) as {
    twitter_user_ids: string[];
  };

  const userClient = new TwitterApi({
    ...defaultAppTokens,
    accessToken,
    accessSecret,
  });

  const { data: followers } = await userClient.v2.followers(twitterUserId);

  const detailedFollowers = twitter_user_ids
    .map((id) => {
      const followerDetail = followers.find((follower) => follower.id === id);

      if (followerDetail) {
        return {
          name: followerDetail.name,
          username: followerDetail.username,
          twitter_user_id: followerDetail.id,
          userId: userId,
        };
      }

      return;
    })
    .filter(Boolean) as Prisma.contactsCreateManyInput[];

  await prisma.contacts.createMany({
    data: detailedFollowers,
  });

  const requests = detailedFollowers.map((follower) => {
    const message = MESSAGES.SENT_TO_EMERGENCY_CONTACTS({
      follower_username: follower.username,
      sender_username: user!.username,
    });

    return sendMessageToTwitterUser(follower.twitter_user_id!, message).catch(
      (err) => {
        console.log("Error Sending Message to Contact", err);
        removeContact(follower.twitter_user_id);
      }
    );
  });

  // TODO:- Send a message to all emergency contacts telling them, the user has added them as an emergency contact.
  await Promise.all(requests);

  res.status(201).send({
    status: "success",
    message: "Emergency Contacts saved successfully!",
    data: detailedFollowers,
  });
}

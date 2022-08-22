import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma-client";

export default withIronSessionApiRoute(deleteContactsRoute, sessionOptions);

async function deleteContactsRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "DELETE") {
      return res.json("Request Methods not supported");
    }

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

    const { id } = req.query as { id: string };

    await removeContact("", id);

    res.status(204).end();
  } catch (error) {
    console.error(error);

    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

export const removeContact = async (twitter_user_id?: string, id?: string) => {
  if (!twitter_user_id && !id) return;

  if (twitter_user_id) {
    const contact = await prisma.contacts.findFirst({
      where: {
        twitter_user_id: twitter_user_id,
      },
    });

    if (contact) {
      return await prisma.contacts.delete({
        where: {
          id: contact.id,
        },
      });
    }
  }

  return await prisma.contacts.delete({
    where: {
      id: id,
    },
  });
};

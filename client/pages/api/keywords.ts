import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { UserV2TimelineResult } from "twitter-api-v2";
import prisma from "lib/prisma-client";

export type Followers = UserV2TimelineResult;

interface ErrorMessage {
  status: "error";
  message: string;
}

export default withIronSessionApiRoute(keywordsRoute, sessionOptions);

interface RouteResponse {
  get: Followers | ErrorMessage;
  post: ErrorMessage;
}

async function keywordsRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      await handleGetKeywords(req, res);
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

// GET /api/contacts
async function handleGetKeywords(req: NextApiRequest, res: NextApiResponse) {
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

  const keywords = await prisma.keywords.findMany();

  console.log({ keywords });

  return res.status(200).send(keywords);
}

// POST /api/contacts/
async function handleCreateKeywords(
  req: NextApiRequest,
  res: NextApiResponse
) {}

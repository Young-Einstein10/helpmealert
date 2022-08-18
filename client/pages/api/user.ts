import { withIronSessionApiRoute } from "iron-session/next";
import prisma from "lib/prisma-client";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { UserV2 } from "twitter-api-v2";

export type User = UserV2 & { isAuthenticated: boolean };

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req: NextApiRequest, res: NextApiResponse<User | {}>) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed

    const userDetails = await prisma.users.findUnique({
      where: {
        id: req.session.userId,
      },
    });

    if (!userDetails) {
      req.session.destroy();

      return res.json({});
    }

    return res.json({
      ...req.session.user,
      isAuthenticated: true,
    });
  } else {
    return res.json({});
  }
}

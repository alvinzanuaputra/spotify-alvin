import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";

const options: InitOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers if needed
  ],
  session: {
    jwt: true,
  },
  // Add other options as needed
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

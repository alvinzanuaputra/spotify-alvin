import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Providers from 'next-auth/providers';

// Define types for provider options
type ProviderOptions = {
  clientId: string;
  clientSecret: string;
};

// Define your provider options here
const providerOptions: ProviderOptions = {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
};

// Define your provider
const GoogleProvider = Providers.Google(providerOptions);

// Add other providers if needed

// Define options for NextAuth
const options = {
  providers: [GoogleProvider],
  session: {
    jwt: true,
  },
  // Add other options as needed
};

// Define the NextAuth handler
const NextAuthHandler = (req: NextApiRequest, res: NextApiResponse<Session | User | JWT>) => NextAuth(req, res, options);

export default NextAuthHandler;

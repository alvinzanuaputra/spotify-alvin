import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import * as Providers from 'next-auth/providers'; // Import all providers as a namespace

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
const googleProvider = Providers.Google(providerOptions);

// Add other providers if needed

// Define options for NextAuth
const options = {
  providers: [googleProvider],
  session: {
    jwt: true,
  },
  // Add other options as needed
};

// Define the NextAuth handler
const NextAuthHandler = (req: NextApiRequest, res: NextApiResponse<Session | User | JWT>) => NextAuth(req, res, options);

export default NextAuthHandler;

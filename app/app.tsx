import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/providers";
import { GoogleProvider } from "next-auth/providers/google";
// import { GitHubProvider } from "next-auth/providers/github";

const providers: AuthProvider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }),
//   GitHubProvider({
//     clientId: process.env.GITHUB_ID,
//     clientSecret: process.env.GITHUB_SECRET,
//   }),
  // Add more providers here as needed
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

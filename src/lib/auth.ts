import {NextAuthOptions,getServerSession} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import SignToken from "./utils";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_SECRET!,
    }),
  ],

  pages: {
    signIn: "/dashboard",
    signOut: "/",
    error: "/error",
  },

  callbacks: {
    async signIn({ account, profile }) {
      const userToSaveToDb = {
        name: profile?.name,
        email: profile?.email,
        isVerified: account?.access_token,
        id: account?.providerAccountId,
      };

      console.log("userToSaveToDb", userToSaveToDb);

      return true;
    },

    async jwt({ token, user, account }) {
      if (account) {
        const token_ = await SignToken(user?.email as string);
        token.userToken = token_;
      }
      return token;
    },

    async session({ session, token, user }) {
      session.user = token;
      console.log("user session", session);
      return session;
    },

    redirect() {
      return "/signup/createaccounts";
    },

  },

  secret: process.env.NEXT_PUBLIC_JWT_SECRET_KEY!,

  session: {
    strategy: "jwt",
  },

};

export const getAuthSession = () => getServerSession(authOptions);

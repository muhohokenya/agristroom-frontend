import {
  Account,
  NextAuthOptions,
  Profile,
  User,
  getServerSession,
} from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import SignToken from "./utils";

type params = {
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  email?:
    | {
        verificationRequest?: boolean | undefined;
      }
    | undefined;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "216228956322-1cnuuapp6a2hv8nnjqom0se6ol40fck9.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: "/dashboard",
    signOut: "/",
    error: "/error",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const userToSaveToDb = {
        name: user.name,
        email: profile?.email,
      };

      console.log("userToSaveToDb", userToSaveToDb);
    },

    async jwt({ token, user, account }) {
      if (account) {
        console.log(user, token, account);
        // call the signToken function which returns a JWT token
        const token = await SignToken(user?.email as string);
        token.userToken = token;
      }
      // the token object is passed done to the session call back for persistence
      return token;
    },
    async session({ session, token, user }) {
      session.user = token.loggedUser;
      return session;
    },

    redirect() {
      return "/dashboard";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

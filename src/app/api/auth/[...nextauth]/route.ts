import { authOptions } from "@/src/lib/auth";
import SignToken from "@/src/lib/utils";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:"216228956322-1cnuuapp6a2hv8nnjqom0se6ol40fck9.apps.googleusercontent.com",
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
        isVerified: account?.access_token
      };

      console.log("userToSaveToDb", userToSaveToDb);
    },

    async jwt({ token, user, account }) {
      if (account) {
        // call the signToken function which returns a JWT token
        const token = await SignToken(user?.email as string);
        token.userToken = token;
      }
      // the token object is passed done to the session call back for persistence
      return token;
    },
    async session({ session, token, user }) {
      session.user = token.loggedUser;
      console.log("user session", session);
      
      return session;
    },

    redirect() {
      return "/dashboard";
    },
  },
  secret: "sammyagristroom2030",
  session: {
    strategy: 'jwt',
   },
});

// handlers
export { handler as GET, handler as POST };

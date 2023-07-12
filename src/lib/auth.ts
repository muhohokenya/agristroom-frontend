import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google"


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_AUTH_SECRET!
        })
    ],
    callbacks: {
        async session({token, session}){
            if(token){
              session.user.email = token.email
              session.user.name = token.name
              session.user.image = token.picture
            }
            return session
        },

        async jwt({token, user})
        {
            // get user by email

            // if no user return token

            // if no usename update user where email is given or update

            return {
                id: "dbUser.id",
                name: "dbUser.name",
                email: "dbUser.email",
                picture: "dbUser.image",
                username: "dbUser.username",
              }
        },
        redirect(){
            return '/dashboard'
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions)
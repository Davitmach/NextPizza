import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
     clientId:process.env.NEXT_GOOGLE_CLIENTID || '',
     clientSecret:process.env.NEXT_GOOGLE_SECRET || '',
     authorization: {
      params: {
        redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
      },
    },
    })
     
   ],
   secret:process.env.NEXTAUTH_SECRET
})
export { handler as GET, handler as POST };



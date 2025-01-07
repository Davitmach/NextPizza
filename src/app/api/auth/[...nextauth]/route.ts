import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
     clientId:process.env.NEXT_GOOGLE_CLIENTID || '',
     clientSecret:process.env.NEXT_GOOGLE_SECRET || ''
    })
     
   ],
})
export { handler as GET, handler as POST };



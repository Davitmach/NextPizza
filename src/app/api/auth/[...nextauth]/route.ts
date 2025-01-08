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
   callbacks: {
    async signIn({ user, account, profile }) {
      if (user) {
        console.log('Пользователь вошел:', user);  // Проверка, что данные пользователя есть
      } else {
        console.log('Нет данных пользователя');  // В случае отсутствия данных
      }
      return true;
    },
    async session({ session, user }) {
      // Логирование данных сессии
      console.log('Текущая сессия:', session);
      return session;
    }
  },
   secret:process.env.NEXTAUTH_SECRET,
  
})
export { handler as GET, handler as POST };



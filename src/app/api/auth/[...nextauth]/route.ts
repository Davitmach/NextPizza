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
    // Колбэк при успешной аутентификации
    async signIn({ user, account, profile }) {
      console.log('Пользователь вошел:', user);  // Логируем данные о пользователе
      console.log('qaqem glxit');  // Ваше сообщение в консоли
      return true;
    },
    // Колбэк для получения данных сессии
    async session({ session, user }) {
      if (user) {
        session.user = user;  // Передаем данные пользователя в session
      }
      return session;
    },
  },
   secret:process.env.NEXTAUTH_SECRET,
  
})
export { handler as GET, handler as POST };



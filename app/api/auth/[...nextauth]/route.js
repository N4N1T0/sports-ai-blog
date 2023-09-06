import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handle = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Password',
      credentials: {
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        if (credentials.password === 'Nan0123') {
          const user = { id: 1, name: 'John' }
          return await Promise.resolve(user)
        }
        return await Promise.resolve(null)
      }
    })
  ],
  callbacks: {
    async signIn (user, account, profile) {
      return '/'
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  }
})

export { handle as POST, handle as GET }

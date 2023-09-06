import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Password',
      credentials: {
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        if (credentials.password === 'Nan0123') {
          const user = { id: 1, name: 'John' }
          return user
        }
        return null
      }
    })
  ],
  callbacks: {
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  }
}

const handle = NextAuth(nextAuthOptions)

export { handle as POST, handle as GET }

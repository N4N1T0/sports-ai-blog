import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handle = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Password',
      credentials: {
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        const user = { id: '1', name: 'Admin', password: 'Nan0123' }
        if (user.password === credentials?.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  }
})

export { handle as POST, handle as GET }

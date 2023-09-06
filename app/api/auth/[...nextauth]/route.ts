import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface Credentials {
  password: string
}

const handle = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Email")
      name: 'Password',
      credentials: {
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials: Credentials) => {
        if (credentials.password === 'Nan0123') {
          const user = { id: 1, name: 'John' }
          return await Promise.resolve(user)
        }
        return await Promise.resolve(null)
      }
    })
  ],
  // Redirect the user to the home page upon successful login
  callbacks: {
    async signIn (user, account, profile) {
      return '/'
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  database: {
    // Configure database options here
  }
})

export { handle as POST, handle as GET }

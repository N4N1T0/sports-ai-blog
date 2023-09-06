import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navbar from 'app/(shared)/Navbar'
import Footer from './(shared)/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { getServerSession } from 'next-auth'
import SessionProvider from './(shared)/ServerProviders'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Striking Gold',
  description: 'A blog for sports enthusiast'
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  // console.log(`the session is ${session === null ? 'null' : 'On'}`)

  return (
    <html lang='es' suppressHydrationWarning>
      <body className={`${openSans.className} dark:bg-wh-900`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <SessionProvider session={session}>
            <Navbar />
            {children}
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

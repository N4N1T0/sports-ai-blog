import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navbar from 'app/(shared)/Navbar'
import Footer from './(shared)/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import SessionProvider from './(shared)/SessionsProvider'
import { getServerSession } from 'next-auth'

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

  return (
    <html lang='es' suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${openSans.className} dark:bg-wh-900`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        </body>
      </ SessionProvider>
    </html>
  )
}

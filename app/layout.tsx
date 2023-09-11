import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navbar from 'app/(shared)/Navbar'
import Footer from './(shared)/Footer'
import { ThemeProvider } from '@/app/(shared)/theme-provider'
import { getServerSession } from 'next-auth'
import SessionProvider from './(shared)/ServerProviders'
import { HomeMetadata } from './seo'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = HomeMetadata

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

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

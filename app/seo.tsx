import type { Metadata } from 'next'

export const HomeMetadata: Metadata = {
  title: {
    template: '%s | Striking Gold',
    default: 'Striking Gold - Your Ultimate Source for Combat Sports'
  },
  description: 'Explore the latest news, analysis, and insights on MMA and combat sports. Get expert opinions, fight predictions, and more.',
  keywords: 'combat sports, MMA, martial arts, sports news, fight analysis',
  openGraph: {
    title: 'Striking Gold - Your Ultimate Source for Combat Sports',
    description: 'Striking Gold - Your Ultimate Source for Combat Sports',
    siteName: 'Striking Gold Blog',
    authors: 'Adrian "Nano" Alvarez',
    images: [
      {
        url: 'https://sports-ai-blog.vercel.app/lego.jpg',
        width: 1200,
        height: 631,
        alt: 'Open Graph Picture for Striking Gold',
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: true
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Striking Gold - Your Ultimate Source for Combat Sports',
    description: 'Explore the latest news, analysis, and insights on MMA and combat sports. Get expert opinions, fight predictions, and more.'
  }
}

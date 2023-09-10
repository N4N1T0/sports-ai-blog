'use client'

import Image from 'next/image'
import Twitter from '@/public/assets/social_twitter.png'
import Facebook from '@/public/assets/social_facebook.png'
import Instagram from '@/public/assets/social_instagram.png'
import Google from '@/public/assets/social_google.png'
import Discord from '@/public/assets/social_discord.png'
import { type SocialLinksProps } from '@/lib/types'
import { useTheme } from 'next-themes'

const SocialLinks = ({ articleTitle, articleUrl, isDark }: SocialLinksProps) => {
  const theme = isDark ?? useTheme().theme ?? 'light'
  const canShare = articleTitle !== undefined && articleUrl !== undefined

  const encodedTitle = canShare ? encodeURIComponent(articleTitle) : ''
  const encodedUrl = canShare ? encodeURIComponent(articleUrl) : ''

  return (
    <div className='flex-between gap-3'>
      <div className='hover:bg-accent-orange p-3 rounded-md transition-colors duration-200'>
        <a href={canShare ? `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` : 'https://twitter.com'}
          target='_blank'
          rel='noreferrer'>
          <Image alt='twitter icon'
          src={Twitter}
          width={20}
          height={20}
          className={`${theme === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </div>
      <div className='hover:bg-accent-orange p-3 rounded-md transition-colors duration-200'>
        <a href={canShare ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` : 'https://www.facebook.com'}
          target='_blank'
          rel='noreferrer'>
          <Image alt='Facebook icon'
          src={Facebook}
          width={20}
          height={20}
          className={`${theme === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </div>
      <div className='hover:bg-accent-orange p-3 rounded-md transition-colors duration-200'>
        <a href={canShare ? `https://www.instagram.com/sharer.php?u=${encodedUrl}` : 'https://www.instagram.com'}
          target='_blank'
          rel='noreferrer'>
          <Image alt='instagram icon'
          src={Instagram}
          width={20}
          height={20}
          className={`${theme === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </div>
      <div className='hover:bg-accent-orange p-3 rounded-md transition-colors duration-200'>
        <a href={canShare ? 'https://discord.com' : 'https://discord.com'}
          target='_blank'
          rel='noreferrer'>
          <Image alt='google icon'
          src={Google}
          width={20}
          height={20}
          className={`${theme === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </div>
      <div className='hover:bg-accent-orange p-3 rounded-md transition-colors duration-200'>
        <a href={canShare ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` : 'https://www.facebook.com'}
          target='_blank'
          rel='noreferrer'>
          <Image alt='discord icon'
          src={Discord}
          width={20}
          height={20}
          className={`${theme === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks

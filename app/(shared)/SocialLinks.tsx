import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Twitter from '@/public/assets/social_twitter.png'
import Facebook from '@/public/assets/social_facebook.png'
import Instagram from '@/public/assets/social_instagram.png'
import Google from '@/public/assets/social_google.png'
import Discord from '@/public/assets/social_discord.png'

type Props = {
  isDark?: string
}

const SocialLinks = ({ isDark }: Props) => {
  return (
    <div className='flex-between gap-3'>
      <Button className='hover:bg-wh-500' size='icon'>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
          <Image alt='twitter icon' 
          src={Twitter} 
          width={20} 
          height={20}
          className={`${isDark === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </Button>
      <Button className='hover:bg-wh-500' size='icon'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <Image alt='Facebook icon' 
          src={Facebook} 
          width={20} 
          height={20}
          className={`${isDark === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </Button>
      <Button className='hover:bg-wh-500' size='icon'>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <Image alt='instagram icon' 
          src={Instagram} 
          width={20} 
          height={20}
          className={`${isDark === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </Button>
      <Button className='hover:bg-wh-500' size='icon'>
        <a href='https://googlw.com' target='_blank' rel='noreferrer'>
          <Image alt='google icon' 
          src={Google} 
          width={20} 
          height={20}
          className={`${isDark === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </Button>
      <Button className='hover:bg-wh-500' size='icon'>
        <a href='https://discord.com' target='_blank' rel='noreferrer'>
          <Image alt='discord icon' 
          src={Discord} 
          width={20} 
          height={20}
          className={`${isDark === 'light' ? 'brightness-0' : ''} `}
          />
        </a>
      </Button>
    </div>
  )
}

export default SocialLinks
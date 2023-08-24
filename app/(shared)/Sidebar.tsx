'use client'

import React from 'react'
import SocialLinks from './SocialLinks'
import { useTheme } from 'next-themes'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from '@/public/assets/ad-2.png'
import AboutProfile from '@/public/assets/about-profile.jpg'

const Sidebar = () => {
  const { theme } = useTheme()

  return (
    <section>
      <h4 className='py-3 px-5 text-wh-50 text-xs font-bold text-center bg-accent-orange'>
        Subscribe and Follow
      </h4>
      <div className='my-5 mx-5'>
        <SocialLinks isDark={theme} />
      </div>
      <Subscribe />
      <Image
        className='hidden md:block my-8 w-full'
        alt='advert-2'
        src={Ad2}
        width={500}
        height={1000}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
      />
      <h4 className='bg-accent-orange py-3 px-5 text-wh-50 text-xs font-bold text-center'>
        About the Blog
      </h4>
      <div className='flex justify-center my-3'>
        <Image
          alt='about-profile'
          src={AboutProfile}
          style={{ width: '500px', height: '250px', objectFit: 'cover' }}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
      </div>
      <h4 className='py-3 px-5 text-wh-500 font-bold text-center'>
        Geoffrey Epstein
      </h4>
      <p className='text-wh-500 text-center text-sm'>
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi
      </p>
    </section>
  )
}

export default Sidebar

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
      <h4 className='py-3 px-5 text-wh-900 text-xs font-bold text-center bg-accent-orange mb-10 sm:mb-0'>
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
      <h4 className='bg-accent-orange py-3 px-5 text-wh-900 text-xs font-bold text-center'>
        About the Blog
      </h4>
      <div className='flex flex-col justify-center mt-7'>
        <Image
          alt='about-profile'
          src={AboutProfile}
          style={{ width: '500px', height: '250px', objectFit: 'cover' }}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
          <h4 className='py-3 px-5 text-wh-500 dark:text-wh-100 font-bold text-center'>
          Adrian Alvarez Alonso
        </h4>
        <p className='text-wh-500 text-center dark:text-wh-100 text-sm'>
          Striking Coach with more than 10 years of experience
        </p>
      </div>
    </section>
  )
}

export default Sidebar

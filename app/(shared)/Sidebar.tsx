'use client'

import React from 'react'
import SocialLinks from './SocialLinks'
import { useTheme } from 'next-themes'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from '@/public/assets/ad-2.png'
import { type Author } from '@/lib/types'

const Sidebar = ({ name, image, bio }: Author) => {
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
      {name === undefined
        ? (
        <>
          <ProfileCard
            name='Adrian "Nano" Alvarez'
            bio='Striking Coach with more than 10 years of experience'
            image='https://res.cloudinary.com/dkvoatzeq/image/upload/v1694183461/ai-sports-blog/1_rthkte.jpg'
          />
          <hr className='border-1 border-black/10 dark:border-wh-10 mt-4'/>
          <ProfileCard
            name='Dayana "Good Day" Abuin'
            bio='Taekwondo Black Belt with more than 5 years of sports journalism'
            image='https://res.cloudinary.com/dkvoatzeq/image/upload/v1694183658/ai-sports-blog/WhatsApp_Image_2023-03-02_at_6.08.10_PM_ffoeyd.jpg'
          />
        </>
          )
        : (
        <ProfileCard
          name={name}
          bio={bio}
          image={image}
        />
          )}

    </section>
  )
}

const ProfileCard = ({ name, image, bio }: Author) => {
  return (
    <div className='flex flex-col justify-center mt-7'>
        <Image
          alt='about-profile'
          src={image ?? ''}
          width={500}
          height={500}
          style={{ width: '500px', height: '250px', objectFit: 'cover' }}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
          <h4 className='py-3 px-5 text-wh-500 dark:text-wh-100 font-bold text-center'>
          {name}
        </h4>
        <p className='text-wh-500 text-center dark:text-wh-100 text-sm'>
          {bio}
        </p>
    </div>
  )
}

export default Sidebar

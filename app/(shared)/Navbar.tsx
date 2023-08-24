import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Theme'
import SocialLinks from './SocialLinks'
import Ad1 from '@/public/assets/ad-1.jpg'

const Navbar = () => {
  return (
    <header className='mb-5'>
      <nav className='flex-between w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block '>
          <SocialLinks isDark='dark'/>
        </div>
        <div className='flex-between gap-10 text-lg'>
          <Link href='/' className='hover:text-accent-orange transition-colors duration-200'>Home</Link>
          <Link href='/trending' className='hover:text-accent-orange transition-colors duration-200'>Trending</Link>
          <Link href='/about' className='hover:text-accent-orange transition-colors duration-200'>About</Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
      <div className='flex-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='font-bold text-3xl uppercase md:text-6xl'>Striking Gold</h1>
          <p className='text-sm mt-2'>a blog dedicated for all sport enthusiastic</p>
        </div>
        <div className='basis-full w-auto relative h-32'>
        <Image
          fill
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          alt='Advertisemnt 1'
          style={{ objectFit: 'cover' }}
          src={Ad1}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
        </div>
      </div>
      <hr className='border-1 border-black/10 mx-8 dark:border-wh-10'/>
    </header>
  )
}

export default Navbar

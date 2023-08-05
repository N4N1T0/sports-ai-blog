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
          <Link href='/' className='hover:text-slate-300 transition-colors duration-200'>Home</Link>
          <Link href='/' className='hover:text-slate-300 transition-colors duration-200'>Trending</Link>
          <Link href='/' className='hover:text-slate-300 transition-colors duration-200'>About</Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
      <div className='flex-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='font-bold text-3xl uppercase md:text-5xl'>Sport Blog</h1>
          <p className='text-sm mt-3'>a blog dedicated for all sport enthusiastic</p>
        </div>
        <div className='basis-full w-auto relative h-32'>
        <Image 
          fill
          placeholder='blur'
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          alt='Advertisemnt 1'
          style={{ objectFit: 'cover'}}
          src={Ad1}
        />
        </div>
      </div>
      <hr className='border-1 mx-10'/>
    </header>
  )
}

export default Navbar
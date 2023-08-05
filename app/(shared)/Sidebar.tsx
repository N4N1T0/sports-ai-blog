"use client"

import React from 'react'
import SocialLinks from './SocialLinks'
import { useTheme } from "next-themes"
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {

  const { theme } = useTheme()

  return (
    <section>
        <h4 className='bg-wh-900 py-2 px-4 text-wh-50 text-sm font-bold uppercase'>Subscribe and Follow</h4>
        <div className='my-4 mx-4'>
          <SocialLinks isDark={theme} />
        </div>
        <div>
          <Subscribe />
          <div className='bg-wh-900'>advert image</div>
          <h4 className='bg-wh-900 py-2 px-4 text-wh-50 text-sm font-bold uppercase'>Abuot the blog</h4>
          <div className='bg-wh-900'>profile image</div>
          <h4 className='py-2 px-4 text-wh-500 text-sm font-bold'>Adrian Alvarez</h4>
          <p className='text-wh-500 text-center text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequatur voluptatum,</p>
        </div>
    </section>
  )
}

export default Sidebar
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle () {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
        <div onClick={toggleTheme} className='hover:bg-accent-orange p-3 rounded-md transition-colors duration-200 flex relative'>
          <Sun className='h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute' />
          <span className='sr-only'>Toggle theme</span>
        </div>
  )
}

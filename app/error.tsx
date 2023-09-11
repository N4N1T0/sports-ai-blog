'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SubscriberError } from '@/lib/errors'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error ({ error, reset }: ErrorProps) {
  useEffect(() => {
  }, [error])

  if (error instanceof SubscriberError) {
    return (
    <div className='w-full h-96 flex flex-col justify-center items-center'>
      <h2 className='font-bold text-9xl'>Sorry!</h2>
      <h4 className='font-semibold text-xl mt-1'>{`Error: ${error.message}`}</h4>
      <p className='mt-1'> Looks like you need to become part of our ranks later. <br /> Head back to the <span><Link href='/' className='hover:text-wh-900 transition-colors duration-200 text-accent-orange font-bold uppercase'>homepage</Link></span> or if you want a second round <span>
        <button onClick={reset} className='hover:text-wh-900 transition-colors duration-200 text-accent-orange font-bold uppercase'>Try Again</button></span></p>
    </div>
    )
  }

  return (
    <div className='w-full h-96 flex flex-col justify-center items-center'>
      <h2 className='font-bold text-9xl'>Not Found</h2>
      <h4 className='font-semibold text-xl mt-1'>{`Error: ${error.message}`}</h4>
      <p className='mt-1'> Looks like you&apos;ve entered uncharted territory in the Striking Gold arena. <br /> Head back to the <span><Link href='/' className='hover:text-wh-900 transition-colors duration-200 text-accent-orange font-bold uppercase'>homepage</Link></span> or if you want a second round <span>
        <button onClick={reset} className='hover:text-wh-900 transition-colors duration-200 text-accent-orange font-bold uppercase'>Try Again</button></span></p>
    </div>
  )
}

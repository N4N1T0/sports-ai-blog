'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error ({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='p-8 leading-5 flex flex-col gap-4 justify-center items-center w-full'>
      <h2 className='text-bold text-3xl'>Ooops!</h2>
      <h5 className='text-bold text-xl'>Page Not Found!</h5>
      <div className='flex gap-10 items-center'>
        <button onClick={() => { reset() }}>Try again</button>
        <button onClick={() => { redirect('/') }}>Return Home</button>
      </div>
    </div>
  )
}

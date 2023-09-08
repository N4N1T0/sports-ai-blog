'use client'

import { useState, type FormEvent } from 'react'

const Subscribe = () => {
  const [subscriber, setSubscriber] = useState('')
  const [subscribing, setSubscribing] = useState(false)

  const submitSubscriber = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { subscriber } = Object.fromEntries(new FormData(e.currentTarget))
    const email = subscriber.toString()
    setSubscribing(true)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/subscriber`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email
      })
    })
    const data = await response.json()

    setTimeout(() => {
      setSubscribing(false)
      setSubscriber('')
    }, 1000)

    return data
  }

  return (
    <form className='text-center bg-wh-10 dark:bg-wh-500 px-5 py-10' onSubmit={async (e) => { await submitSubscriber(e) }}>
      <h4 className='font-semibold text-base'>Subscribe to our Newsletter</h4>
      <fieldset disabled={subscribing} className='group'>
        <label htmlFor='subscriber' className='text-wh-500 my-3 w-5/6 dark:text-wh-100 mx-auto inline-block'>
          Enter email address to get top news and great deals
          <input
            id='subscriber'
            className='text-center w-5/6 min-w-[100px] px-5 py-2 border-2 mt-2'
            placeholder='Enter Email Address'
            name='subscriber'
            onChange={(e) => { setSubscriber(e.currentTarget.value) }}
            value={subscriber}
          />
        </label>
        <button disabled={subscribing} className='bg-accent-orange text-wh-900 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-2 group-enabled:hover:bg-accent-orange/75 inline-flex items-center justify-center '>
          <span className='group-enabled:opacity-1 group-disabled:opacity-0'>
            SUBSCRIBE
          </span>
          <span className='absolute group-disabled:opicity-1 group-enabled:opacity-0'>
            SUBSCRIBING...
          </span>
        </button>
      </fieldset>
    </form>
  )
}

export default Subscribe

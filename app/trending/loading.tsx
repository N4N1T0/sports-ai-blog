import React from 'react'

function loading () {
  return (
    <div className='flex w-full px-8 gap-3'>
      <div className='basis-3/4 flex flex-col gap-5'>
        <div className='h-10 w-full bg-wh-100 rounded-md' />
        <div className='h-96 w-full flex gap-5 [&>div]:bg-wh-100 [&>div]:rounded-md'>
          <div className='w-3/4 h-full' />
          <div className='w-3/4 h-full' />
        </div>
        <div className='h-96 w-full flex gap-5 [&>div]:bg-wh-100 [&>div]:rounded-md'>
          <div className='w-3/4 h-full' />
          <div className='w-3/4 h-full' />
        </div>
      </div>
      <div className='basis-1/4 flex flex-col gap-5 [&>div]:bg-wh-100 [&>div]:rounded-md'>
        <div className='w-full h-96'/>
        <div className='w-full h-96'/>
      </div>
    </div>
  )
}

export default loading

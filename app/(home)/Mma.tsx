import React from 'react'
import Card from 'app/(shared)/Card'

const Mma = () => {
  return (
    <section>
      <hr className='border-1'/>
      {/* Header */}

      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase'>MMA</h4>
        <p className='font-bold text-2xl'>Latest in Mix Martial Arts</p>
      </div>

      {/* Section  */}
      <div className='sm:grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-3 my-4'>
        <Card 
          className='bg-wh-500 row-span-3 col-span-1'
          imageHeihgt='h-96'
          isLongForm
        ></Card>
        <Card 
          className='bg-wh-500 row-span-1 col-span-1 mt-5 sm:mt-0 flex-between'
          imageHeihgt='h-40'
          isSmallCard
        ></Card>
        <Card 
          className='bg-wh-500 row-span-1 col-span-1 mt-5 sm:mt-0 flex-between'
          imageHeihgt='h-40'
          isSmallCard
        ></Card>
        <Card 
          className='bg-wh-500 row-span-1 col-span-1 mt-5 sm:mt-0 flex-between'
          imageHeihgt='h-40'
          isSmallCard
        ></Card>
      </div>
    </section>
  )
}

export default Mma
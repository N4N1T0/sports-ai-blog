import React from 'react'
import Card from 'app/(shared)/Card'

const Boxing = () => {
  return (
    <section className='mt-10'>
      <hr className='border-1'/>

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-green py-2 px-4 text-wh-900 text-sm font-bold uppercase'>Boxing</h4>
        <p className='font-bold text-2xl'>Latest in Boxing</p>
      </div>

      {/* Section */}
      <div className='sm:flex justify-between gap-6'>
        <Card 
          className='basis-1/3 bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
        <Card 
          className='basis-1/3 bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
        <Card 
          className='basis-1/3 bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
      </div>
      <Card 
        className='sm:flex bg-wh-500 justify-between items-center gap-2 mt-6 mb-4'
        imageHeihgt='h-80'
        ></Card>
    </section>
  )
}

export default Boxing
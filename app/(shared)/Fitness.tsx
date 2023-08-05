import React from 'react'
import Card from './Card'

const Fitness = () => {
  return (
    <section className='pt-2 mb-10'>
      <hr className='border-1'/>

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-green py-2 px-4 text-wh-900 text-sm font-bold uppercase'>Fitness</h4>
        <p className='font-bold text-2xl'>Latest in Fitness</p>
      </div>

      {/* Section */}
      <div className='sm:grid grid-cols-2 gap-8'>
        <Card 
          className='bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
        <Card 
          className='bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
        <Card 
          className='bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
        <Card 
          className='bg-wh-500 mt-4 sm:mt-0'
          imageHeihgt='h-80'
        ></Card>
      </div>
    </section>
  )
}

export default Fitness
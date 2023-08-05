import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string,
  imageHeihgt: string,
  isSmallCard?: boolean,
  isLongForm?: boolean
}

const Card = ({
  className,
  imageHeihgt,
  isSmallCard = false,
  isLongForm = false
}: Props) => {
  return (
    <div className={className}>
      <Link className='basis-full hover:opacity-70' href='/'>
        <div className={`relative w-auto mb-2 ${imageHeihgt}`}>image</div>
      </Link>

    <div className='basis-full'>
      <Link href='/'>
        <h4 className={`font-bold hover:text-accent-green 
            ${isSmallCard ? 'text-base' : 'text-lg'}
            ${isSmallCard ? 'line-clamp-2' : ''}`}>title</h4>
      </Link>
    </div>

      <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-2`}>
        <h5 className='font-semibold text-xs'>author</h5>
        <h6 className='text-wh-300 text-xs'>date</h6>
        <p className={`text-wh-100 ${isLongForm ? 'line-clamp-5' : 'line-clamp-3'}`}>snippet</p>
      </div>
    </div>
  )
}

export default Card
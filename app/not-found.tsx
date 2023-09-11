import Link from 'next/link'

function notFound () {
  return (
    <div className='w-full h-96 flex flex-col justify-center items-center'>
      <h2 className='font-bold text-9xl'>Not Found</h2>
      <p className='mt-1'> Looks like you&apos;ve entered uncharted territory in the Striking Gold arena. Head back to the <span><Link href='/' className='hover:text-wh-900 transition-colors duration-200 text-accent-orange font-bold uppercase'>homepage</Link></span></p>
    </div>
  )
}

export default notFound

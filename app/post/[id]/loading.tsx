const loading = () => {
  return (
    <div className='flex w-full px-8 gap-3'>
      <div className='basis-3/4 [&>div]:bg-wh-100 [&>div]:rounded-md flex gap-3 flex-col'>
        <div className='h-4 w-1/2' />
        <div className='h-8 w-20' />
        <div className='h-12 w-3/4' />
        <div className='h-4 w-1/4' />
        <div className='h-96 w-full' />
        <div className='h-4 w-1/2' />
        <div className='h-2 w-1/2' />
        <div className='h-10 w-1/2' />
        <div className='h-2 w-1/2' />
      </div>
      <div className='basis-1/4 [&>div]:bg-wh-100 [&>div]:rounded-md'>
        <div className='w-full h-96'/>
        <div className='w-full h-96'/>
      </div>
    </div>
  )
}

export default loading

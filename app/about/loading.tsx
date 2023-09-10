const loading = () => {
  return (
    <div className='flex w-full px-8 gap-3'>
      <div className='basis-3/4 gap-5 flex flex-col [&>div]:bg-wh-100 [&>div]:rounded-md'>
        <div className='h-6 w-full' />
        <div className='h-14 w-full' />
        <div className='h-96 w-full' />
        <div className='h-96 w-full' />
      </div>
      <div className='basis-1/4 [&>div]:bg-wh-100 [&>div]:rounded-md'>
        <div className='w-full h-96'/>
        <div className='w-full h-96'/>
      </div>
    </div>
  )
}

export default loading

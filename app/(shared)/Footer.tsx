import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 pb-10 dark:pt-5 pt-10 px-10'>
      <hr className='border-1 dark:border-wh-10 dark:block hidden mb-5'/>
      <div className='justify-between mx-auto gap-12 sm:flex'>
        {/* First Column */}
        <div className='mt-12 basis-1/2 sm:mt-0'>
          <h5 className='font-bold uppercase'>Sports Blog</h5>
          <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates libero sunt adipisci tempora eveniet, saepe ut illum officia, cum, eius autem! Deleniti necessitatibus aut, quisquam corporis temporibus ipsa perspiciatis?</p>
        <p>copyright Sports Blog All Right Reserved</p>
        </div>
        {/* Second Column */}
        <div className='mt-12 basis-1/4 sm:mt-0'>
          <h5 className='font-bold uppercase'>Links</h5>
          <ul>
            <li className='my-3'><a href='#'>Massa erci senetus</a></li>
            <li className='my-3'><a href='#'>Rassemi jikl oklirk</a></li>
            <li><a href='#'>Ullancormper vivinanm</a></li>
          </ul>
        </div>
        {/* Second Column */}
        <div className='mt-12 basis-1/4 sm:mt-0'>
          <h5 className='font-bold uppercase'>Contact us</h5>
          <ul>
            <li className='my-3'><a href='#'>+34 567 78 65 49</a></li>
            <li className='my-3'><a href='#'>orem, ipsum dolor sit amet consectetur adipisicing elit.</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

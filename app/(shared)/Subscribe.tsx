import React from 'react'

const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 dark:bg-wh-500 px-5 py-10">
      <h4 className="font-semibold text-base">Subscribe to our Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 dark:text-wh-100 mx-auto">
        Enter email address to get top news and great deals
      </p>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
      />
      <button className="bg-accent-orange text-wh-900 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3 hover:bg-accent-orange/75">
        SUBSCRIBE
      </button>
    </div>
  )
}

export default Subscribe

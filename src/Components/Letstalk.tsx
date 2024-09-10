import React from 'react'

const Letstalk = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 py-[2.5rem] px-4 lg:px-0'>
          <div className='text-center lg:text-left'>
            <h2 className='text-xl lg:text-2xl mb-2'>Message Us</h2>
            <h1 className='text-2xl lg:text-3xl font-extrabold mb-2'>
              Let`s Transform your vision into reality
            </h1>
            <div className='w-full lg:w-[620px]'>
              <p className='text-sm'>{`We believe that solutions should be both powerful and need-specific. That's why our team of experienced professionals works closely with clients to understand their specific needs and create custom solutions that are tailored to their business goals`}</p>
            </div>
          </div>
          <div className='w-full lg:w-auto '>
            <div className='bg-white px-6 py-8 lg:px-10 lg:py-10 rounded-md'>
              <h1 className='text-xl lg:text-2xl text-center mb-3 font-bold font-[Inter]'>Let`s Talk</h1>
              <div className='flex flex-col gap-4'>
                <input
                  type="text"
                  placeholder='Full_Name'
                  className='w-full lg:w-[450px] border border-gray-500 text-red-600 px-3 py-2'
                />
                <input
                  type="email"
                  placeholder='EMAIL_ADDRESS'
                  className='w-full lg:w-[450px] border border-gray-500 px-3 py-2'
                />
                <input
                  type="number"
                  placeholder='YOUR_NUMBER'
                  className='w-full lg:w-[450px] border border-gray-500 px-3 py-2'
                />
                <textarea
                  placeholder='TELL US ABOUT YOUR PROJECT'
                  className='w-full lg:w-[450px] h-[150px] border border-gray-500 px-3 py-2'
                ></textarea>
                <button className="border bg-black w-full lg:w-[170px] text-white border-black px-2 py-2 rounded-md hover:bg-gradient-to-r from-gray-200 via-yellow-200 to-yellow-300 hover:scale-105 transition-transform duration-300 hover:border-none">
                  Send The Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Letstalk

import Image from 'next/image';
import React from 'react';

const BudgetContact = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center'>
        {/* Left Section */}
        <div className='w-full lg:w-[30%] h-auto lg:h-[800px] bg-black px-5 py-10 flex flex-col justify-start items-center'>
          <div className='flex items-center gap-2 mb-10 lg:mb-[120px]'>
            <Image src="/images/logoo.png" alt="logo" height={65} width={70} />
            <h1 className='text-xl lg:text-2xl font-medium text-white'>AlgoCodic Solutions</h1>
          </div>
          <div className='text-center lg:text-left'>
            <h1 className='text-xl lg:text-2xl mb-4 text-white'>We are here to make your business grow</h1>
            <p className='text-lg lg:text-xl text-white'>Enhance your business with our smart digital solutions, which will make your business better stand out.</p>
          </div>
        </div>
        
        {/* Right Section */}
        <div className='w-full lg:w-[70%] h-auto lg:h-[800px] bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 flex justify-center items-center px-4 py-8'>
          <div className='w-full max-w-md px-6 py-8 lg:px-10 lg:py-10 h-[700px] bg-white rounded-md shadow-lg'>
            <h1 className='text-lg lg:text-2xl mb-3 font-bold font-[Inter]'>Please tell us about your project details</h1>
            <p className='mb-6'>Give us the details and we will change your imagination into reality.</p>
            <div className='flex flex-col gap-4'>
              <div>
                <h6 className='text-lg lg:text-xl font-bold font-[Inter]'>Project Name</h6>
                <input type="text" placeholder='e.g. chat app' className='w-full border border-gray-500 px-3 py-2' />
              </div>
              <div>
                <h6 className='text-lg lg:text-xl font-bold font-[Inter]'>Project Budget</h6>
                <input type="text" placeholder='e.g. ₹10,000' className='w-full border border-gray-500 px-3 py-2' />
              </div>
              <div>
                <h6 className='text-lg lg:text-xl font-bold font-[Inter]'>Email</h6>
                <input type="email" placeholder='e.g. example@example.com' className='w-full border border-gray-500 px-3 py-2' />
              </div>
              <div>
                <h6 className='text-lg lg:text-xl font-bold font-[Inter]'>Express your project</h6>
                <textarea
                  placeholder='Please Describe your Project'
                  className='w-full h-[150px] border border-gray-500 px-3 py-2'
                ></textarea>
              </div>
              <button className="w-full lg:w-[170px] border bg-black text-white border-black px-2 py-2 rounded-md hover:bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 hover:scale-105 transition-transform duration-300 hover:border-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetContact;

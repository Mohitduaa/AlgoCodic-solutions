import React from 'react'

const BudgetContact = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='w-[30%] h-[700px] bg-black flex flex-col justify-center'>
          <h1 className='text-white text-2xl'>We are here to make your business grow</h1>
          <p className='text-white text-xl text-center'>Enhance your business with our smart digital solutions, which will make your business better stand out.</p>
        </div>

        <div className='w-[70%] h-[700px] bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 flex justify-center'>
          <div className='px-6 py-8 lg:px-10 lg:py-10 rounded-md'>
            <h1 className='text-xl lg:text-2xl mb-3 font-bold'>Book IT Services</h1>
            <p>Schedule a consultation for your IT needs.</p>
            
            <div className="bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Enter your name" className="border border-black px-2" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Enter your email" className="border border-black px-2" />
                </div>
              </div>
              <div className="">
                <div>
                <label>Service</label>
                <select id="service" className="border border-black">
                  <option>Select Course</option>
                  <option>Web Development</option>
                  <option >Mobile Apps</option>
                  <option>Data Science</option>
                  <option>Machine Learning</option>
                  <option>Robotics</option>
                  <option>Data Engineering</option>
                  <option>Software Testing</option>
                </select>
                </div>
                <div>
                <label>Mobile No</label>
                <input  type="number" placeholder="Enter your mobile no" className="border border-black " />
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BudgetContact;

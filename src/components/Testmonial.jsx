import React from 'react'
import { testimonials } from '../constants'

const Testmonial = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-2xl sm:text-3xl lg:text-3xl text-center my-10 lg:my-20'>
        <p>What people are <span className='bg-gradient-r bg-orange-400 from-orange-800 text-transparent bg-clip-text'>SAYING ???</span></p>
      </h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((test , index)=>(
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2 '>
                <div className='bg-neutral text-md rounded border border-neutral-800 p-6 font-thin hover:bg-neutral-500'>
                    <p>{test.text}</p>
                    <div className='flex mt-8 items-start'>
                        <img className='rounded-full w-12 h-12 mr-4'
                        src={test.image}
                        alt={test.user}/>
                    
                        <div>
                            <h6>{test.user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>{test.company}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testmonial

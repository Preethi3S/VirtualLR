import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import code from '../assets/code.jpg';
import { checklistItems } from '../constants';
const WorkFlow = () => {
  return (
       <div className='mt-10 border-b border-neutral-400'>
        <h2 className='text-2xl sm:text-3xl lg:text-6xl text-center tracking-wide'>Accelerate your <span className='bg-gradient-to-r bg-orange-400 from-orange-800 bg-clip-text text-transparent'>Work flow</span></h2>
       
       <div className='flex flex-wrap justify-center'>
           <div  className= 'w-full lg:w-1/2'><img src={code} alt='code'/></div>
          <div className='pt-12 w-full lg:w-1/2 '>
              {
                checklistItems.map((item , index) =>(
                  <div key={index} className='flex mb-12'>
                    <div className='text-green-400 mx-6 bg-neutral-700 rounded-full w-10 h-10  p-2 items-center justify-center'>
                      <CheckCircle2 />
                    </div>
                    <div>
                    <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                    <p className='text-md text-neutral-500'>{item.description}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default WorkFlow

import React from 'react'
import {CheckIcon } from 'lucide-react';
import { pricingOptions } from '../constants';

const PricingSection = () => {
  return (
    <div className='mt-20 border-b border-neutral-400 '>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide'>Pricing Section</h2>
        <div className='flex flex-wrap mt-10 text-center'>
            {pricingOptions.map((option , index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                     <div className='p-10 mb-10 border border-neutral-300 rounded-xl hover:bg-neutral-700 hover:translate-y-3 hover:scale-110'>
                            <p className='text-4xl mb-8 '>
                                {option.title}
                                {option.title === 'Pro' && (
                                    <span className='text-xl bg-gradient-to-r bg-orange-400 from-orange-900 text-transparent bg-clip-text'> ( Most Popular)</span>
                                )}
                            </p>
                            <p>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-neutral-400 tracking-tight'>/month</span>
                            </p>
                            <ul>
                                {
                                  option.features.map((item , index)=>(
                                    <li className='mt-8 flex items-center' key={index}>
                                        <span className='text-green-700'><CheckIcon /></span>
                                        <span className='mx-2'>{item}</span>
                                    </li>
                                  ))
                                }
                            </ul>
                            <a
                            className='inline-flex items-center justify-center w-full h-12 p-5 mt-10 hover:bg-orange-700 border border-orange-500 rounded-lg transition duration-200'> Subscribe </a>
                     </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default PricingSection

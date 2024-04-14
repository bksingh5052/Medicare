import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FaqItem = ({item}) => {


    const {question,content} = item
    const [isOpen, setIsOpen] = useState(false)


    const toggleAccordion = ()=>{
        setIsOpen(!isOpen)
    }



  return (
    <div className='p-3 lg:p-5 border border-solid boredr-[#D9DCE2] rounded-[12px] mb-5 cursor-pointer transition-all duration-200'>
      <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
        <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-semibold'>
            {question}
        </h4>
        <div className={`${isOpen && "bg-primaryColor text-white border-none"} h-7 w-7 lg:w-7 lg:h-8 rounded border border-solid border-[#141F21] flex items-center justify-center`}>  
        {isOpen ? (<AiOutlineMinus/>): (<AiOutlinePlus/>)}
        </div>
      </div>

     {isOpen &&  (<div className='mt-4'>
        <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-textColor'>{content}</p>
      </div>)
      }
    </div>
  )
}

export default FaqItem

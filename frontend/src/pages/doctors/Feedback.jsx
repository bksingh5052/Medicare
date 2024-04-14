import React from 'react'
import { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div>
      <div className='mb-[50px]'>
      <h4 className="text-[20px] leading-[30px] text-headingColor font-bold mb-[30px]">
         All Reviews (143)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full' src={avatar} alt="" />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-irisBlueColor font-bold'>
                Bablu Singh
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>Oct 14, 2023</p>
              <p className='text__para mt-3 font-medium text-[15px]'>Exellent Service</p>
            </div>
          </div>

          <div className='flex gap-1'>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
          </div>
        </div>
      </div>

      {!showFeedbackForm && <div className="text-center">
        <button className="btn" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}
      {showFeedbackForm && <FeedbackForm/>}
    </div>
  )
}

export default Feedback

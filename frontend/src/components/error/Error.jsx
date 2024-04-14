import React from 'react'

const Error = ({errMessage}) => {
  return (
    <div className='flex items-center  w-full h-full'>
      <h3 className='text-[20px] mt-5 text-red-600 leading-[30px] font-semibold'>{errMessage}</h3>
    </div>
  )
}

export default Error

import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div className='mt-5 flex items-center justify-center w-full h-full'>
      <HashLoader color='#0067ff'/>
    </div>
  )
}

export default Loading

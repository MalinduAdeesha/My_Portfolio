import React from 'react'
import myImage from '../../Components/Assets/myAv.png'

const image = () => {
  return (
    <div>
        <img src={myImage} alt="myimg" title='my-image' className='w-[550px] absolute -bottom-40 right-28 hidden xl:block'/>
    </div>
  )
}

export default image
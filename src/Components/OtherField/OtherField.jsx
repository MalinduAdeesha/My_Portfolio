import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom'

const OtherField = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden bg:none bg-explosion xl:bg-cover xl:bg-right bg-no-repeate mix-blend translate-z-0">
        <div className='text-white Asssignment_field'>
          <div className='z-40 grid w-screen h-screen p-5 '> 
          <div class="grid lg:grid-cols-4 gap-4 h-full grid-cols-2 ">
 
          <div className='absolute z-40 font-extrabold text-white border rounded-full cursor-pointer right-4 top-3 bg-white/20 hover:border-red-500'>
          <Link to={"/projects"}> <IoMdClose title="Close" className='p-2 text-3xl cursor-pointer hover:text-red-500 group' /></Link>
          </div>
            
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>

            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>

            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>
            <div class="box bg-white/10 backdrop-blur-sm  h-full z-30 rounded-xl"></div>

            {/* <div class="box bg-red-500 h-full z-30 rounded-xl"></div>
            <div class="box bg-green-500 h-full z-30 rounded-xl"></div>
            <div class="box bg-blue-500 h-full z-30 rounded-xl"></div>
            <div class="box bg-yellow-500 h-full z-30 rounded-xl"></div> */}
          </div>
          </div>
        </div>
        
        <div className='text-white web_field'>
          <div></div>
        </div>

        <div className='text-white Other_field'>
          <div></div>
        </div>
    </div>
  )
}

export default OtherField
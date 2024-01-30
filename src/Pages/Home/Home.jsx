import React from 'react'
import ProjectsBtn from '../../Components/SpinButton/ProjectsBtn'
import '../Home/home.css'
import {motion} from 'framer-motion';
import {fadeIn} from '../../Components/variants'
import Image from '../../Components/Image/image';
import Animatebg from '../../Components/AnimateBg/animatebg';
// import Particles from '../../Components/Particals/particals';


const Home = () => {
  return (
    <div className='absolute w-full h-full overflow-hidden bg:none bg-explosion xl:bg-cover xl:bg-right bg-no-repeate mix-blend translate-z-0'>
      <Animatebg/>
      <div className='flex text-white'>
        <motion.div className='flex flex-col items-center w-screen h-screen p-10 my-20 lg:my-48 lg:mx-32 left lg:items-start lg:p-0 '
        variants={fadeIn('down',0.5)} 
        initial="hidden" 
        animate="show"
        exit="hidden">
        
          <h1 className='z-30 mb-2 text-xl font-medium text-center lg:text-2xl '>Hi im</h1>
          <h1 className='mb-5 font-bold text-[85px] z-20 text-center'><span className='text-red-500'>M</span>alindu <span className='text-red-500'>A</span>deesha</h1>
          
          <p className='mb-4 font-medium text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, corrupti?</p>
          <h4 className='font-thin text-center text-md'> <span className='text-red-500'>UI/UX</span> DESIGNER</h4>
          <h3 className='mb-4 font-thin text-center text-md'> <span className='text-red-500'>WEB</span> DEVELOPER</h3>
          <p className='mb-5 font-medium text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, explicabo.</p>
          <motion.div
          variants={fadeIn('right',0.5)} 
          initial="hidden" 
          animate="show"
          exit="hidden">
            <ProjectsBtn/>
          </motion.div>
        </motion.div>
        
        <div className='right'>
         
         <div>
           <Image/>
         </div>
        
        </div>
      </div>
    </div>
  )
}

export default Home
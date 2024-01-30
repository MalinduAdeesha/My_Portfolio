import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook,faGlobe,faCode  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../../Components/variants'
import Animatebg from '../../Components/AnimateBg/animatebg';
// import AssignmentField from '../../Components/AssignmentField/AssignmentField';
// import WebField from '../../Components/WebField/webField';
// import OtherField from '../../Components/OtherField/OtherField';


const Project = () => { 
  return (
    <div className="absolute w-full h-full overflow-hidden bg:none bg-explosion xl:bg-cover xl:bg-right bg-no-repeate mix-blend translate-z-0">
      <Animatebg/>
      <div className='flex flex-col items-center justify-center w-screen lg:h-screen main lg:flex-row h-[90%] mt-10 lg:mt-0'>
        
        <motion.div className='w-1/3 h-screen  assignment max-h-[500px] z-30 flex items-center justify-center max-w-[400px] '
        variants={fadeIn('down',0.5)} 
        initial="hidden" 
        animate="show"
        exit="hidden">
          <Link to={'/assignment'}>
          <div className='lg:w-[350px] lg:h-[400px] w-[200px] h-[200px] bg-white/20 backdrop-blur-sm rounded-3xl hover:scale-105 cursor-pointer transition-transform duration-300 flex items-center justify-center text-white text-xl font-semibold border border-dashed  hover:border-double hover:border-2  hover:bg-white/10 flex-col group hover:bg-gradient-to-tl from-yellow-500 via-red-500 to-pink-500 hover:text-black'>
            <p>Assignments</p>
            <div className='p-5 transition-transform duration-1000 lg:p-20 text-8xl group-hover:rotate-180 group-hover:text-white'> <FontAwesomeIcon icon={faBook} title="Assignment" /></div>
            <p className='text-sm text-transparent font-extralight group-hover:text-white'>click to open</p>
          </div>
          </Link>
        </motion.div>
        
        
        <motion.div className='w-1/3 h-screen  web max-h-[500px] z-30 items-center justify-center flex max-w-[400px]'
        variants={fadeIn('up',0.5)} 
        initial="hidden" 
        animate="show"
        exit="hidden">
          <Link to={"/web"}>
          <div className='lg:w-[350px] lg:h-[400px] w-[200px] h-[200px] bg-white/20 backdrop-blur-sm rounded-3xl hover:scale-105 cursor-pointer transition-transform duration-300 flex items-center justify-center text-white text-xl font-semibold border border-dashed  hover:border-double hover:border-2  hover:bg-white/10 flex-col group hover:bg-gradient-to-tl from-red-500 via-pink-500 to-blue-800 hover:text-black'>
            <p>Web Developments</p>
            <div className='p-5 transition-transform duration-1000 lg:p-20 text-8xl group-hover:rotate-180 group-hover:text-white'><FontAwesomeIcon icon={faGlobe} title="Web" /></div>
            <p className='text-sm text-transparent font-extralight group-hover:text-white'>click to open</p>
          </div>

          
          </Link>
        </motion.div>
        
        <motion.div className='w-1/3 h-screen  other max-h-[500px] z-30 items-center justify-center flex max-w-[400px]'
        variants={fadeIn('down',0.5)} 
        initial="hidden" 
        animate="show"
        exit="hidden">
          <Link to={"/other"}>
          <div className='lg:w-[350px] lg:h-[400px] w-[200px] h-[200px] bg-white/20 backdrop-blur-sm rounded-3xl hover:scale-105 cursor-pointer transition-transform duration-300 flex items-center justify-center text-white text-xl font-semibold border border-dashed  hover:border-double hover:border-2  hover:bg-white/10 flex-col group hover:bg-gradient-to-tl from-indigo-500 via-red-500 to-orange-500 hover:text-black '>
            <p>Other Projects</p>
            <div className='p-5 transition-transform duration-1000 lg:p-20 text-8xl group-hover:rotate-180 group-hover:text-white'><FontAwesomeIcon icon={faCode} title="Other" /></div>
            <p className='text-sm text-transparent font-extralight group-hover:text-white'>click to open</p>
          </div>
          </Link>
        </motion.div>

        <div className='field_loder'>
          {/* <AssignmentField/>
          <WebField/>
          <OtherField/> */}
        </div>
        
      </div>
     
    </div>
  )
}

export default Project 
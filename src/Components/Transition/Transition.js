import{motion}from 'framer-motion'
import { useLocation } from 'react-router-dom';

const transitionVariations ={
  initial:{
    x:'100%',
    width:'100%'
  },
  animate:{
    x:'0%',
    width: '100%'
  },
  exit:{
    x:['0%','100%'],
    width:['0%','100%'],
  },
};

const Transition = () => {
  const location = useLocation();
  return (
    <>
      <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#2d2d30]'
       variants={transitionVariations}
       initial='initial'
       animate='animate'
      //  exit='exit'
       transition={{delay:0.2, duration:0.6,ease:'easeInOut'}}
       key={location.key}
      >
      </motion.div>
      <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#414145]'
       variants={transitionVariations}
       initial='initial'
       animate='animate'
      //  exit='exit'
       transition={{delay:0.4, duration:0.6,ease:'easeInOut'}}
       key={location.key}
      >
      </motion.div>
      <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#5a5a5c]'
       variants={transitionVariations}
       initial='initial'
       animate='animate'
      //  exit='exit'
       transition={{delay:0.6, duration:0.6,ease:'easeInOut'}}
       key={location.key}
      >
      </motion.div>
     
    </>
  );
};

export default Transition;

import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import roundedTextImage from '../Assets/rounded-text2.png';

const ProjectsBtn = () => {
  return (
    <div className='relative z-20 mx-auto xl:mx-0'>
      <a href='/contact' className="relative w-[185px] h-[185px] flex justify-center items-center bg-cover bg-center bg-no-repeat group z-999 bottom-[10%]">
        <img
          src={roundedTextImage}
          width={141}
          height={148}
          alt=''
          className="animate-spin-slow w-full h-full max-w-[150px] max-h-[150px] z-999"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-500" />
      </a>
    </div>
  );
};

export default ProjectsBtn;

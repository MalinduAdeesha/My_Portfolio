import React from 'react'
import './About.css'
import myImg from '../../Components/Assets/myAv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin, faGithub,faTiktok,faMediumM } from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion';
import {fadeIn} from '../../Components/variants'
import { Link} from 'react-router-dom';
import Animatebg from '../../Components/AnimateBg/animatebg';
// import ParticleComponent from '../../Components/Particals/particals';

const About = () => {
  return (
    <div>
      <div className='absolute flex w-full h-full overflow-hidden bg:none bg-explosion xl:bg-cover xl:bg-right bg-no-repeate mix-blend translate-z-0'>
      <Animatebg/>
        <div className='hidden w-1/2 left lg:block'>
        <img src={myImg} alt="" className='w-[550px] absolute -bottom-36 left-36 hidden xl:block '/>
        </div>

        <div className='flex items-center justify-center w-1/2 h-screen mx-auto text-white max-w-[450px] text-center lg:text-left'>
          <div className='text '>
            <motion.div 
            variants={fadeIn('down',0.5)} 
            initial="hidden" 
            animate="show"
            exit="hidden">
              <h1 className='mb-5 text-2xl'>Hi i am,</h1>
              
              <p className='mb-2 text-lg font-thin'><span className='font-semibold text-red-500'>Malindu Adeesha</span>. I live in Kalutara District, Sri Lanka.
                  I am currently studying computer science.
              </p>
              <p className='mb-3 text-lg font-thin'>
                  I enjoy coding, graphic designing, 3D modeling, web developing.
              </p>
              <p className='mb-3 text-lg font-thin'>
                  I prefer to do UX UI design. I have a serious passion for
                  UI effects, animations, and creating intuitive, dynamic user experience.
                  Well-organized person, problem solver, independent employee
                  high attention to detail.
              </p>
              <p className='mb-5 text-lg font-normal'>
                  Let's make something special ...... 
              </p>  
              <p className='mb-5 text-lg font-thin'>
                 
                 
              </p>

              </motion.div>
                <motion.div className='down'
                variants={fadeIn('up',0.5)} 
                initial="hidden" 
                animate="show"
                exit="hidden">
                  
                    <div className='flex gap-5 icons'>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://wa.me/0713138857'}><FontAwesomeIcon icon={faWhatsapp} title="WhatsApp" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.instagram.com/malindu.adee/'}><FontAwesomeIcon icon={faInstagram} title="Instagram" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.facebook.com/nowty.chabby.1?mibextid=ZbWKwL'}><FontAwesomeIcon icon={faFacebook} title="Facebook" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.linkedin.com/in/malindu-adeesha-6ba798261/'}><FontAwesomeIcon icon={faLinkedin} title="LinkedIn" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://github.com/MalinduAdeesha'}><FontAwesomeIcon icon={faGithub} title="GitHub" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.tiktok.com/@stylishcoder?is_from_webapp=1&sender_device=pc'}><FontAwesomeIcon icon={faTiktok} title="TikTok" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://medium.com/@malinduadeesha63'}><FontAwesomeIcon icon={faMediumM} title="Medium" /></Link></div>
                    </div>
                  
                </motion.div>
          </div>
        </div>

        
      </div>
    </div>
   
  )
}

export default About
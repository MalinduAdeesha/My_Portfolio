// ContactForm.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {fadeIn} from '../../Components/variants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin, faGithub,faMediumM,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import Animatebg from '../../Components/AnimateBg/animatebg';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wz61vrs', 'template_4w4nthj', form.current, 'Yh1r_S5V-5Y2dKwLl')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          //alert
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been send",
            showConfirmButton: false,
            timer: 1500
          });
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  

  return (
    <div className='absolute flex items-center justify-center w-full h-full overflow-hidden text-white bg:none bg-explosion xl:bg-cover xl:bg-right bg-no-repeate mix-blend translate-z-00'>
      <Animatebg/>
    <motion.form ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center lg:w-[70%] bg-white/10 p-10 z-20 rounded-2xl w-full'
    variants={fadeIn('down',0.5)} 
    initial="hidden" 
    animate="show"
    exit="hidden">
      <motion.div className='flex flex-col '
      variants={fadeIn('up',0.7)} 
      initial="hidden" 
      animate="show"
      exit="hidden">
      <label className='m-5 text-white'>Name</label>
      <input type="text" name="user_name" className='h-10 lg:w-[700px] w-[350px] rounded-md p-2 text-black focus:outline-red-500 border' placeholder='name'/>
      <label className='m-5 text-white'>Email</label>
      <input type="email" name="user_email" className='h-10 lg:w-[700px] w-[350px] rounded-md p-2 text-black focus:outline-red-500 border' placeholder='email'/>
      <label className='m-5 text-white'>Message</label>
      <textarea name="message" className='h-48 lg:w-[700px] w-[350px] rounded-md p-2 text-black focus:outline-red-500 border'/>
      <input type="submit" value="Send" className='h-10 mx-auto mt-10 bg-green-500 rounded-sm cursor-pointer w-44 hover:bg-green-700'/>
      <hr className='mt-5 '/>
      </motion.div>
      <div className='flex gap-10 icons'>
      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://wa.me/0713138857'}><FontAwesomeIcon icon={faWhatsapp} title="WhatsApp" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.instagram.com/malindu.adee/'}><FontAwesomeIcon icon={faInstagram} title="Instagram" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.facebook.com/nowty.chabby.1?mibextid=ZbWKwL'}><FontAwesomeIcon icon={faFacebook} title="Facebook" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.linkedin.com/in/malindu-adeesha-6ba798261/'}><FontAwesomeIcon icon={faLinkedin} title="LinkedIn" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://github.com/MalinduAdeesha'}><FontAwesomeIcon icon={faGithub} title="GitHub" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://www.tiktok.com/@stylishcoder?is_from_webapp=1&sender_device=pc'}><FontAwesomeIcon icon={faTiktok} title="TikTok" /></Link></div>
                      <div className='w-10 h-10 p-1 mt-10 text-2xl text-center transition-transform border border-white border-dashed rounded-full cursor-pointer hover:text-red-500 hover:border-double hover:scale-125'><Link to={'https://medium.com/@malinduadeesha63'}><FontAwesomeIcon icon={faMediumM} title="Medium" /></Link></div>
      </div>
    </motion.form>
    
    </div>
  );
};

export default ContactForm;

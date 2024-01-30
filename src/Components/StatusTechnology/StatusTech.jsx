import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faAngular, 
  faJs, 
  faNode, 
  faCss3Alt, 
  faHtml5, 
  faVuejs, 
  faSass, 
  faNpm,
  faJava,
  faSwift,
  faBootstrap,
//   faPalette
} from '@fortawesome/free-brands-svg-icons';



const StatusTech = () => {
  return (
    <div className='grid grid-cols-3 text-6xl'>
      <FontAwesomeIcon icon={faReact} title="React" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faAngular} title="Angular" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faJs} title="JavaScript" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faNode} title="Node.js" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faHtml5} title="HTML5" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faCss3Alt} title="CSS3" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faSass} title="Sass" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faVuejs} title="Vue.js" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faNpm} title="npm" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faJava} title="Java" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faSwift} title="Swift" className='px-10 py-5 '/>
      <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" className='px-10 py-5 '/>
      {/* <FontAwesomeIcon icon={faPalette} title="Tailwind CSS" /> */}
    </div>
  )
}

export default StatusTech
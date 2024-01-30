import React from 'react'

const Assignment = ({ pagelink, gitlink, image }) => {
  return (
    <div>
        <div class="relative box bg-white/10 backdrop-blur-sm z-30 rounded-xl w-full h-[30vh]">
        <Link to={pagelink}>
          <img src={image} alt="" className="w-full h-full" />
        </Link>

        <Link to={gitlink}>
          <div class="absolute bottom-2 left-2  text-black  py-2 px-2 rounded-full text-3xl ">
            <FontAwesomeIcon icon={faGithub} title="GitHub" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Assignment
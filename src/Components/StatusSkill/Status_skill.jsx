import React from 'react'
import '../StatusSkill/Status_skill.css'

const Status_skill = () => {
  return (
    <div className="flex items-center justify-center w-[70vw] h-screen  text-white lg:max-w-[450px] flex-col gap-7 pl-12 mb-16 lg:pl-0 lg:mb-0  ">
      <div class="container rounded-md">
        <div class="skills html rounded-md">
          {" "}
          <span className="name">HTML</span>90%
        </div>
      </div>

      <div class="container rounded-md">
        <div class="skills css rounded-md">
          <span className="name">CSS</span>80%
        </div>
      </div>

      <div class="container rounded-md">
        <div class="skills js rounded-md">
          <span className="name">JavaScript</span>65%
        </div>
      </div>

      <div class="container rounded-md">
        <div class="skills php rounded-md">
          <span className="name">PHP</span>60%
        </div>
      </div>

      <div class="container rounded-md">
        <div class="skills php rounded-md">
          <span className="name">PHP</span>60%
        </div>
      </div>

      <div class="container rounded-md">
        <div class="skills php rounded-md">
          <span className="name">PHP</span>60%
        </div>
      </div>

      <div class="container rounded-md">
        <div class="skills php rounded-md">
          <span className="name">PHP</span>60%
        </div>
      </div>
    </div>
  )
}

export default Status_skill
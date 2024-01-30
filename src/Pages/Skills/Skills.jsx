import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import StatusSkill from '../../Components/StatusSkill/Status_skill';
import StatusTech from "../../Components/StatusTechnology/StatusTech";
import StatusTools from '../../Components/StatusTools/StatusTools';
import {motion} from 'framer-motion';
import {fadeIn} from '../../Components/variants'
import Animatebg from '../../Components/AnimateBg/animatebg';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("one");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="absolute w-full h-full overflow-hidden bg:none bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeate mix-blend translate-z-0">
      <Animatebg/>
      <div className="flex flex-col items-center w-screen h-screen px-28 page lg:flex-row">
        <motion.div className="z-30 flex flex-col  justify-center lg:h-screen lg:gap-16 lg:max-w-[500px] w-screen grow gap-3 p-5 lg:p-0 "
                    variants={fadeIn('right',0.5)} 
                    initial="hidden" 
                    animate="show"
                    exit="hidden">
          
          <div
            className={`flex flex-row items-center gap-6 p-3 text-white rounded-lg one bg-white/10 backdrop-blur-sm group hover:scale-105 cursor-pointer ${activeTab === "one" ? "active" : ""}`}
            onClick={() => handleTabClick("one")}
          >
            <div className="text-3xl text-white transition-transform duration-300 group-hover:rotate-180">
              <FontAwesomeIcon icon={faPencilAlt} title="Edit" />
            </div>
            <div>
              <p className="text-lg font-semibold group-hover:text-red-500">
                Skills
              </p>
              <p className="hidden text-sm font-extralight lg:block">
                clean modern design - optimized for prtfomence, search engines
                and converting user to customer
              </p>
            </div>
          </div>

          <div
            className={`flex flex-row items-center gap-6 p-3 text-white rounded-lg two bg-white/10 backdrop-blur-sm group hover:scale-105 cursor-pointer ${activeTab === "two" ? "active" : ""}`}
            onClick={() => handleTabClick("two")}
          >
            <div className="text-3xl text-white transition-transform duration-300 group-hover:rotate-180">
              <FontAwesomeIcon icon={faCode} title="Code" />
            </div>
            <div>
              <p className="text-lg font-semibold group-hover:text-red-500">
                Technology
              </p>
              <p className="hidden text-sm font-extralight lg:block ">
                combined the latest technologies to a progressive website
              </p>
            </div>
          </div>

          <div
            className={`flex flex-row items-center gap-6 p-3 text-white rounded-lg three bg-white/10 backdrop-blur-sm group hover:scale-105 cursor-pointer ${activeTab === "three" ? "active" : ""}`}
            onClick={() => handleTabClick("three")}
          >
            <div className="text-3xl text-white transition-transform duration-300 group-hover:rotate-180">
              <FontAwesomeIcon icon={faCogs} title="Technology" />
            </div>
            <div>
              <p className="text-lg font-semibold group-hover:text-red-500">
                Tools
              </p>
              <p className="hidden text-sm font-extralight lg:block ">
                use modern tools for building sites
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="right flex items-center justify-center lg:w-full h-screen lg:mx-auto text-white lg:max-w-[500px] flex-col gap-7 lg:mr-16 bg-white/10 backdrop-blur-sm max-h-[500px] rounded-xl w-screen mb-10 lg:mb-0 "
                    variants={fadeIn('left',0.5)} 
                    initial="hidden" 
                    animate="show"
                    exit="hidden">
          {activeTab === "one" && <StatusSkill />}
          {activeTab === "two" && <StatusTech />}
          {activeTab === "three" && <StatusTools />}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

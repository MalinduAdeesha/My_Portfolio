import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const webproject = ({ pagelink, gitlink, image }) => {
  return (
    <div>
      <div class="relative box bg-white/10 backdrop-blur-sm z-30 rounded-xl w-full h-[30vh]">
        <Link to={pagelink}>
          <img src={image} alt="" className="w-full h-full" />
        </Link>

        <Link to={gitlink}>
          <div class="absolute bottom-2 left-2  text-gray-500  py-2 px-2 rounded-full text-3xl ">
            <FontAwesomeIcon icon={faGithub} title="GitHub" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default webproject;

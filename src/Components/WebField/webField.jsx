import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import WebProject from "../WebProjects/webproject";
import google from "../Assets/google.png";
import travel from "../Assets/travel.png";
import vehical from '../Assets/vehical.png'
import chat from '../Assets/chat.png'
import watch from '../Assets/watch.png'
import instagram from '../Assets/instagram.png'

const WebField = () => {
  const [webprojects] = useState([
    {
      pagelink: "https://malinduadeesha.github.io/Google-Home-Page/",
      gitlink: "https://github.com/MalinduAdeesha/Google-Home-Page",
      image: google,
    },
    {
      pagelink: "https://malinduadeesha.github.io/travel_web_Front_End/#",
      gitlink: "https://github.com/MalinduAdeesha/travel_web_Front_End",
      image: travel,
    },
    {
      pagelink: "https://malinduadeesha.github.io/Vehical-Sale-Web/",
      gitlink: "https://github.com/MalinduAdeesha/Vehical-Sale-Web",
      image: vehical,
    },
    {
      pagelink: "https://malinduadeesha.github.io/Chat-web/",
      gitlink: "https://github.com/MalinduAdeesha/Chat-web",
      image: chat,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/instagram_clone",
      image: instagram,
    },{
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },{
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },{
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    },
    {
      pagelink: "",
      gitlink: "https://github.com/MalinduAdeesha/Watches_Frontend",
      image: watch,
    }
  ]);

  return (
    <div className="absolute w-full h-full overflow-x-hidden overflow-y-auto bg:none bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeate mix-blend translate-z-0">
      <div className="text-white Asssignment_field">
        <div className="z-40 grid w-screen h-screen p-5 ">
          <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-4">
            {/* close button */}
            <div className="fixed z-50 font-extrabold text-white border-4 border-red-300 border-dashed rounded-full cursor-pointer right-6 top-6 bg-white/20 hover:border-red-500 animate-bounce hover:animate-none">
              <Link to={"/projects"}>
                <div>
                <IoMdClose
                  title="Close"
                  className="p-2 text-4xl font-extrabold text-red-300 cursor-pointer hover:text-red-500 "
                />
                </div>
              </Link>  
            </div>

            {webprojects.map((web) => (
              <WebProject
                pagelink={web.pagelink}
                gitlink={web.gitlink}
                image={web.image}
              />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default WebField;

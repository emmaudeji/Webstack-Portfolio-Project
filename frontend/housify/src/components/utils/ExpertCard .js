import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const ExpertCard = (props) => {
  return (
    <div className="bg-zinc-800 pb-4 rounded-[50px] rounded-tr-none  hover:border-2 border-zinc-400 duration-300">
      <div className="Image-wrapper w-full bg-zinc-500 rounded-[50px] rounded-tr-none h-[280px] overflow-hidden mb-4">
        <img className="w-full object-cover" src={props.img} alt="" />
      </div>
      <div className="px-6 pb-4">
        <div class="flex justify-between pt-2">
          <p>{props.name}</p>
          <div className=" flex  text-[24px]  hover:text-purple-700 duration-300">
            <FaLinkedin className="mr-2" />
            <FaPhone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;

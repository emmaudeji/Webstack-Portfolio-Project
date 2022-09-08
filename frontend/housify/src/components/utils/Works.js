import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Works = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-60 overflow-hidden mr-6 text-center">
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-violet-800	ml-28 mb-4 text-2xl" />
                <h6>Money Matters</h6>
                <p className="text-[12px]">Decide on your budget and value, you wish to derive</p>
                <p className="text-[12px]">
                  Check out how to plan on your next vacation{" "}
                  <a className="text-violet-600" href="">
                    Here
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-60 overflow-hidden mr-6"></div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-60 overflow-hidden mr-6"></div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-60 overflow-hidden mr-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

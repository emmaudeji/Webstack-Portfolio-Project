import React, { useState } from "react";
import UiFace from "../../assets/47.jpg";
import AiFillEnvironment from "react-icons/ai";

const AgentHeroBanner = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
        <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
          {/* Header Text */}
          <div className="my-10 md:my-auto">
            <h1 className="pb-4 text-4xl md:text-6xl">{props.header}</h1>
            <h5>{props.text}</h5>
            <div className="md:flex flex-col justify-between w-full p-6">
              <div className="text-left ">
                <h5>Location</h5>
                <div className="flex">
                  <div className="  rounded-full mt-2 w-10 h-10 bg-zinc-300"></div>
                  <p>7 MCC Avenue, Boston, Canada</p>
                </div>
                <div className="flex align-middle">
                  <AiFillEnvironment />
                  <p className="pt-4">7 MCC Avenue, Boston, Canada</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          {/* header Image */}
          <div className="my-auto relative pt-12">
            <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none w-[90%] md:ml-auto relative">
              <img
                className="w-full h-[70vh] object-cover"
                src={UiFace}
                alt="featured image"
              />
            </div>
            <div className="absolute top-[80%]">
              <p className="button text-[24px] px-8">{props.label}</p>
            </div>
          </div>
        </div>

        {/* search block component */}
        {/* <div className="seachProperty">
          <div className="flex flex row mx-auto my-10">
            <input>
              <select>
                <option>

                </option>
              </select>
            </input>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AgentHeroBanner;

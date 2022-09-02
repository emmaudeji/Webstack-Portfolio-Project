import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeroImageBox from "../utils/HeroImageBox";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
        <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
          {/* Header Text */}
          <div className="my-10 md:my-auto">
            <h1 className="pb-8 text-4xl md:text-6xl">
              Discover More suitable properties across the world
            </h1>
          </div>

          {/* HeroImageBox component */}
          <HeroImageBox />
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

export default Hero;

import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Works = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6 text-center">
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-violet-800	ml-32 mb-4 text-2xl" />
                <h6>Money Matters</h6>
                <p className="text-[12px]">Decide on your budget and value, you wish to derive</p>
                <p className="text-[12px] ">
                  Check out how to plan on your next vacation{" "}
                  <a className="text-violet-600" href="">
                    Here
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-violet-800	ml-32 mb-4 text-2xl" />
                <h6>Find A Perfect Home</h6>
                <p className="text-[12px]">
                  Use our vast search tool to find you perfect home from anywhere in the world.
                  <br />
                  <a className="text-violet-600" href="">
                    Explore Homes
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-violet-800	ml-32 mb-4 text-2xl" />
                <h6>Make A Deal</h6>
                <p className="text-[12px]">
                  Meet with the Agent that is hosting the property and make the deal.
                  <br />
                  <a className="text-violet-600" href="">
                    Meet an Agent
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-violet-800	ml-32 mb-4 text-2xl" />
                <h6>Own The Home</h6>

                <p className="text-[12px]">
                  Secure your home and enjoy your commodity. You don't deserve any less. <br />
                  <a className="text-violet-600" href="">
                    Client's Story
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

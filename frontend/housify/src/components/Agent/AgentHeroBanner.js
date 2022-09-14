import React from "react";
import Zeliq from "../../assets/Zeliq.jpg";
import { NavLink } from "react-router-dom";

const AgentHeroBanner = (props) => {
  return (
    <div className=" ml-16 ">
      <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
        <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
          {/* Header Text */}
          <div className="my-10 md:my-auto">
            <h1 className="pb-4 text-4xl md:text-6xl">{props.header}</h1>
            <h5>{props.text}</h5>
            <div className="md:grid grid-cols-2 justify-between w-full pt-6 text-left ">
              <div>
                <h5 className="inline-block mr-4">address</h5>
                <p>7 MCC Avenue, Boston, Canada</p>
                <h5 className="inline-block mr-4">phonenumber</h5>
                <p>+234-890-2033-333</p>
                <h5 className="inline-block mr-4">email</h5>
                <p>zelipha@email.com</p>
              </div>
              <div className="">
                <h5 className="inline-block mr-4">linkedin</h5>
                <p>https://linkedin.com/in/zelipha</p>
                <h5 className="inline-block mr-4">twitter</h5>
                <p>@zelipha</p>
                <h5 className="inline-block mr-4">Instagram</h5>
                <p>@zelipha_properties</p>
              </div>

              <button className="mt-10 w-[200px]">
                <NavLink className="" to="/AgentForm">
                  Edit Profile
                </NavLink>
              </button>
            </div>
          </div>

          {/* header Image */}
          <div className="my-auto relative pt-12 mr-16">
            <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none w-[90%] md:ml-auto relative">
              <img
                className="w-full h-[70vh] object-cover"
                src={Zeliq}
                alt="Zeliq"
              />
            </div>
            <div className="absolute top-[80%]">
              <p className="button text-[24px] px-8">{props.label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHeroBanner;

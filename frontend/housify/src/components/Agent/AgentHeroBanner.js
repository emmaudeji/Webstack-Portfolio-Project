import React, { useState } from "react";
import Zeliq from "../../assets/Zeliq.jpg";
import { NavLink } from "react-router-dom";
import MoreProperty from "../Property/MoreProperty";
import ListPropertyForm from "../Templates/ListPropertyForm";

const AgentHeroBanner = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div className="  ">
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
            <div className="my-auto relative pt-6 sm.pt-12 md.mr-16">
              <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none md:w-[90%] md:ml-auto relative">
                <img
                  className="w-full h-[70vh] object-cover"
                  src={Zeliq}
                  alt="Zeliq"
                />
              </div>
              <div className="absolute top-[80%]">
                <p className="button text-[24px] px-8" onClick={handleClick}>
                  {props.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isClicked ? (
        <ListPropertyForm />
      ) : (
        <MoreProperty header="Properties" text="Listed Properties By Zelipha" />
      )}
    </div>
  );
};

export default AgentHeroBanner;

import React, { useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";

const Service = (props) => {
  // TODO: use the right icons or each service.

  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto py-10 px-10 flex-col justify-between text-center md:flex-row relative">
        {/* property-card-container */}
        <div className="grid md:grid-cols-2 gap-6 py-10">
          <div>
            {/* section label */}
            <div className="p-6">
              <h3 className="text-purple-700 md:text-left"> {props.label} </h3>
              <h2 className="">{props.header}</h2>
              <h5 className="pt-4 md:text-left"> {props.text} </h5>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="p-4 hover:border-white duration-500">
              <ApartmentIcon></ApartmentIcon>
              <h3>Buy Property</h3>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>

            <div className="p-4 hover:border-white duration-500">
              <ApartmentIcon></ApartmentIcon>
              <h3>Sell Property</h3>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>

            <div className="p-4 hover:border-white duration-500">
              <ApartmentIcon></ApartmentIcon>
              <h3>Rent Property</h3>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>

            <div className="p-4 hover:border-white duration-500">
              <GroupIcon></GroupIcon>
              <h3>Property Agent</h3>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 items-center md:absolute">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;

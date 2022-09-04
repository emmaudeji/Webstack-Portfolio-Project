import React, { useState } from "react";
import PropertyCard from "../utils/PropertyCard";

const MoreProperty = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-purple-700"> {props.header} </h3>
          <h5 className="pt-4"> {props.text} </h5>
        </div>
        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
          <div className="pr-16 mb-8">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="pr-16">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="pr-16">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="pr-16">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="pr-16">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="pr-16">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
        </div>
        <div className="w-full pt-10 items-center">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default MoreProperty;

import React, { useState } from "react";
import logo from "../../assets/housify.png";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import PropertyCard from "../utils/PropertyCard";
import Button from "../utils/Button";

const MoreProperty = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-20 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h2> View More Properties </h2>
        </div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
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

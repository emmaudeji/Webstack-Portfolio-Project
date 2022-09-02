import React, { useState } from "react";
import logo from "../../assets/housify.png";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import PropertyCard from "../utils/PropertyCard";

const FeaturedProperty = () => {
  return (
    <div className="w-full">
      <div className="container">
        {/* section label */}
        <div className=""></div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-10">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-2">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
        </div>
        <div className="w-full pt-10 items-center"></div>
      </div>
    </div>
  );
};

export default FeaturedProperty;

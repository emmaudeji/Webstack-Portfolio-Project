import React from "react";

const PropertyCard = (props) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-[50px] rounded-tr-none  hover:border-2 border-zinc-400 duration-300">
      <div className="Image-wrapper w-full bg-zinc-500 rounded-[50px] rounded-tr-none h-80 overflow-hidden mb-4">
        <img className="w-full object-cover" src={props.img} alt=" prop-pc" />
      </div>
      <div className="px-6 pb-4 text-2xl">
        <p className="text-right font-semibold">{props.price}</p>
        <div class="flex justify-between pt-2">
          <p>{props.propertyType}</p>
          <p>
            {props.city} <span>{props.country}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

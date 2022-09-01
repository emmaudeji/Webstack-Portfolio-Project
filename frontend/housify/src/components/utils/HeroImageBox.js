import React from "react";
import House from "../../assets/h1.jpg";

const HeroImageBox = () => {
  return (
    <div className="my-auto relative">
      <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none w-[90%] md:ml-auto relative">
        <img
          className="w-full h-[57vh] object-cover"
          src={House}
          alt="featured image"
        />
      </div>
      <div className="absolute top-[75%]">
        <p className="button text-xl p-5">Texas</p>
      </div>
    </div>
  );
};

export default HeroImageBox;

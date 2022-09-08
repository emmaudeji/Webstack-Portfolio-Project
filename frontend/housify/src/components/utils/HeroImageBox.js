import React from "react";
//import House from "../../assets/h1.jpg";


const HeroImageBox = (props) => {
  return (
    <div className="my-auto relative pt-12">
      <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none w-[90%] md:ml-auto relative">
        <img className="w-full h-[80vh] object-cover" src={House} alt="featured foto" />

        <img className="w-full h-[80vh] object-cover" src={props.url} alt="featured foto" />
      </div>
      <div className="absolute top-[75%]">
        <p className="button text-xl p-5">{props.p}</p>
      </div>
    </div>
  );
};

export default HeroImageBox;

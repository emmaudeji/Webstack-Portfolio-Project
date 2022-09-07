import React from "react";

const SearchBar = (props) => {
  return (
    <div className="w-full pt-8 px-10 md:px-[200px]">
      <h3 className="pb-8 text-center">{props.header}</h3>
      <form action="Post">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-4 p-6 md:p-4 rounded-[70px] bg-zinc-800 shadow-lg shadow-black-500 hover:border-zinc-400 hover:border-[1px] duration-300 text-center text-[22px] md:w-full">
          <div className=" p-2">
            <select
              name=""
              id="location"
              className="bg-transparent w-full  p-2 focus:bg-transparent rounded-lg"
            >
              <option value="" className="mr-6">
                Location
              </option>
              <option value="" className="">
                Ghana
              </option>
              <option value="" className="">
                Kenya
              </option>
            </select>
          </div>
          <div className=" p-2">
            <select
              name=""
              id="location"
              className="bg-transparent w-full p-2 focus:bg-transparent rounded-lg"
            >
              <option value="" className="">
                Property-Type
              </option>
              <option value="" className="">
                Duplex
              </option>
              <option value="" className="">
                Bungalow
              </option>
            </select>
          </div>
          <div className=" p-2">
            <select
              name=""
              id="location"
              className="bg-transparent w-full p-2 focus:bg-transparent rounded-lg"
            >
              <option value="" className="">
                Max-Price
              </option>
              <option value="" className="">
                $58,000
              </option>
              <option value="" className="">
                $54,000
              </option>
            </select>
          </div>
          <div className=" p-2 ">
            <button className="rounded-full px-6">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

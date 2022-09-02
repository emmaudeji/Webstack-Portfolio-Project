import React from "react";
<<<<<<< Updated upstream

function About() {
  return <div className=" About"></div>;
=======
import Header from "../Header/Header";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import { Input } from "@mui/material";


function About() {
  return (
   <div className=" About">
      <Header />
      <section className="bg-black h-screen text-white flex">
        <div className="ml-36 pt-28 pr-28" >
          <h2 className="font-bold mt-20 text-4xl">We are dedicated to innovating the Luxury Real Estate Industry</h2>
        </div>
        <div className="pt-40 pl-16 ">
            <div id="left">
              <ApartmentIcon></ApartmentIcon> 
              <h3 className="text-white">Buy Property</h3>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>

            <div id="right">
              <ApartmentIcon></ApartmentIcon>
              <h3>Sell Property</h3>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>

            <div id="left">
              <ApartmentIcon></ApartmentIcon>
              <h3>Rent Property</h3>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>

            <div id="right">
              <GroupIcon></GroupIcon>
              <h3>Property Agent</h3>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>    
        </div>
      </section>

      <section className="bg-zinc-900 h-screen text-white flex">
        <div className="box1"></div>
        <button className="Btn bg-purple-700 text-black">Featured Home</button>
        <div className="mt-36">
          <h1 className="font-bold text-4xl mt-20">Your Best Life Begins <br></br>With A Home That Inspires You</h1>
        </div>
      </section>
      <section className="bg-Zinc-900 h-screen">
        <button className="largeBtn" >

        </button>

      </section>
      
  </div>
  );
>>>>>>> Stashed changes
}

export default About;

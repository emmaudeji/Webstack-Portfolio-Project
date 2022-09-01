import React from "react";
import Header from "../Header/Header";
import "./Home.css";


function Home() {
  return (
    <div className="Home">
      <Header />
      <section className="bg-zinc-900 h-screen text-white flex">
        <div className="leading-10 ml-36 mt-40">
          <h1 className="font-bold text-5xl">Find Your Next Perfect Place To Live</h1>
          <p className="text-3xl font-extralight mt-6">Let's help you find a home that is perfect for you</p>

          <input className="btn outline-0 text-black p-5 mt-6" placeholder="Abuja, NG"></input>
        </div>
 

        <div className="box"></div>

        <div className="box h-200 w-200" style={{
          width: "50%", 
          height: "50%", 
          border: "solid 1px", 
          borderBottomLeftRadius: "70px", 
          borderBottomRightRadius: "70px",
          borderTopRightRadius: "70px",
          marginTop: "10%",
          padding: "10%",
          marginRight: "10%",
          marginLeft: "10%"
          }}></div>

      </section>
      <section className="bg-black h-screen text-white">
        <div className="ml-36 pt-28">
          <h3 className="text-purple-800 text-2xl">About Us</h3>
          <h2 className="font-bold mt-6 text-4xl">We Provide The Best Property For You</h2>
          <p className="text-2xl font-extralight mt-4">
            With our vast search tool, you can find yourr dream home from any location in the world. All we do is help you find the place, meet the agents, and seal the deal. There's no extra
            commission for our service.
          </p>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Home;

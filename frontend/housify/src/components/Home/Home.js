import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroImageBox from "../utils/HeroImageBox";
import SearchButton from "../utils/SearchButton";
import MoreProperty from "../Property/MoreProperty";
import ExpertSection from "../utils/ExpertSection";
import Works from "../utils/Works";
import Service from "../About/Service";
import Partners from "../utils/Partners";
import useFetch from "../utils/useFetch";
import FeaturedProperty from "../Property/FeaturedProperty";

function Home() {

  const {items} = useFetch()

  return (
    <div className="Home">
      <Header />
      <section className="ml-16 mr-16">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
            <div className="my-10  md:my-auto">
              <h1 className="pb-8 text-4xl md:text-6xl">Find Your Next Perfect Place To Live</h1>
              <p className="text-xl mb-10">Let's help you find a home that is perfect for you</p>
              <SearchButton />
            </div>
            {<HeroImageBox p="Featured Homes" url ={items[0]?.url}/>}
            {/* <HeroImageBox p="Featured Homes" url ={false | require("../../assets/h2.jpg")}/> */}
          </div>
        </div>
      </section>

      <section className="bg-black  text-white flex">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <Service
            label="About Us"
            header="We Provide The Best Property For You"
            text="With our vast search tool, you can find yourr dream home from any location in the world. All we do is help you find the place, meet the agents, and seal the deal. There's no extra commission for our service."
          />
        </div>
      </section>

      <section className="bg-black text-white">
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties around the World " items={items} />
      </section>
      <section className="bg-black  text-white">
        <div className="text-center pt-20">
          <h3 className="text-purple-700 text-2xl">How it Works</h3>
          <p className="mb-12">Confidence in Collaboration</p>
        </div>
        <Works />
      </section>
      <section className="bg-black text-white">
        <div className="text-center pt-20">
          <h3 className="text-purple-700 text-2xl">Meet an Agent</h3>
          <p>Do you prefer to get advice from an Agent?</p>
          <p>Now you meet them across the world.</p>
        </div>
        <ExpertSection />
      </section>
      <section className="bg-black text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">Our Partners</h3>
          <p className="mb-12">We have strong partnership with renowned agencies and organizations.</p>
        </div>
        <Partners />
      </section>
      <section className="bg-black  text-center pt-16">
        <h3 className="text-purple-700 text-2xl ">Have a Question?</h3>
        <p className="mb-20 text-white">Let us help you.</p>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
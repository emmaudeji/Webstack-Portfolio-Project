import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MoreProperty from "../Property/MoreProperty";
import SearchBar from "../utils/SearchBar";
// import FeaturedProperty from "../Property/FeaturedProperty";
import ExpertSection from "../utils/ExpertSection";

function Agent() {
  return (
    <div className="Agent">
      <Header />
      <Hero header="We have Expert Agents ready to support your goals" />

      <ExpertSection
        header="Meet Expert Agents"
        text="We have certified experts ready to attend to you"
      />
      <SearchBar />
      <MoreProperty
        header="Properties"
        text="Find More Properties that meets your need"
      />
      {/* <FeaturedProperty
        header="Featured Properties"
        text="Top Rated Properties"
      /> */}
      <div className="mt-20"></div>
      <Footer />
    </div>
  );
}

export default Agent;

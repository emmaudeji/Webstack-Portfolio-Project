import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProperty from "../Property/FeaturedProperty";
import MoreProperty from "./MoreProperty";
import Footer from "../Footer/Footer";

function Property() {
  return (
    <div className="Property">
      <Header />
      <Hero header="Discover More suitable properties across the world" />
      <FeaturedProperty />
      <MoreProperty />
      <Footer />
    </div>
  );
}

export default Property;

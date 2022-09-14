import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ContactDetails from "./ContactDetails";
import GoogleMap from "./GoogleMap";
import ContactFormSection from "./ContactFormSection";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";

function Contact() {
  return (
    <div className="Contact">
      <Header />
      <Hero
        header="Got Some Questions To Ask?"
        text="We would like to know how we can serve you better. We respond within 2 hours."
      />
      <ContactDetails />
      <GoogleMap />
      <ContactFormSection />
      <div className="pt-10 pb-[100px] text-center">
        <h4>Find A House That Meets Your Need</h4>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

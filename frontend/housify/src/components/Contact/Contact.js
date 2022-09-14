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
        header="Got SOme Questions To Ask?"
        text="We would like to find out how we can serve you better. We respond within 2 hours."
      />
      <ContactDetails />
      <GoogleMap />
      <ContactFormSection />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Contact;

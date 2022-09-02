import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Form from "./FormSection";

function RegisterAgent() {
  return (
    <div className="Property">
      <Header />
      <Hero header="Do You Have What It Takes To Consult For Property Management Services?" text="Register with your license and build your Career in real estate agency." />
      <Form />
      <Footer />
    </div>
  );
}

export default RegisterAgent;

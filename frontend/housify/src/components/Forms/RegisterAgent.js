import React from "react";
import Navbar from "../Header/Navbar";
import Hero from "../Hero/Hero";
import FooterEM from "../Footer/FooterEM";
import Form from "./FormSection";

function RegisterAgent() {
  return (
    <div className="Property">
      <Navbar />
      <Hero
        header="Do You Have What It Takes To Consult For Property Management Services?"
        text="Register with your license and build your Career in real estate agency."
      />
      <Form />
      <FooterEM />
    </div>
  );
}

export default RegisterAgent;

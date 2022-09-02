import React from "react";
import Navbar from "../Header/Navbar";
import Hero from "../Hero/Hero";
import FooterEM from "../Footer/FooterEM";
import Form from "./FormSection";

function RegisterAgent() {
  return (
    <div className="Property">
      <Navbar />

      <div className="w-full mx-auto p-10 text-center">
        <h2 className="pb-4">
          Do you have what it takes to consult for property management?
        </h2>
        <h5>
          Register with your license and let's support you to build your career.
        </h5>
      </div>

      <Form />
      <FooterEM />
    </div>
  );
}

export default RegisterAgent;

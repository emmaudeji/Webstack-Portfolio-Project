import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AgentHeroBanner from "./AgentHeroBanner";

function Agent() {
  return (
    <div className="Agent">
      <Header />
      <AgentHeroBanner
        header="Zelipha Onyeoma"
        text="Expert dealer in Residential Homes and Luxury apartments. Licensed in Canada and Asia. Trusted by experts and companies with 4.5 rating in Trustpilot."
        label="Contact Zelph"
      />

      <Footer />
    </div>
  );
}

export default Agent;

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AgentHeroBanner from "./AgentHeroBanner";
import MoreProperty from "../Property/MoreProperty";
import FeaturedProperty from "../Property/FeaturedProperty";
import ExpertSection from "../utils/ExpertSection";

function Agent() {
  return (
    <div className="Agent">
      <Header />
      <AgentHeroBanner
        header="Zelipha Onyeoma"
        text="Expert dealer in Residential Homes and Luxury apartments. Licensed in Canada and Asia. Trusted by experts and companies with 4.5 rating in Trustpilot."
        label="Contact Zelph"
      />
      <MoreProperty header="Properties" text="Listed Properties By Zelipha" />
      <FeaturedProperty
        header="Featured Properties"
        text="Top Rated Properties"
      />
      <ExpertSection
        header="Meet Expert Agents"
        text="We have certified experts ready to attend to you"
      />
      <Footer />
    </div>
  );
}

export default Agent;

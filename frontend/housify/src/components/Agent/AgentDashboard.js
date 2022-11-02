import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AgentHeroBanner from "./AgentHeroBanner";
import UserHeroBanner from "./UserHeroBanner";
import ExpertSection from "../utils/ExpertSection";
import { useAuth } from "../../commons/auth";

function AgentDashboard() {
  const auth = useAuth();

  return (
    <div className="Agent">
      <Header />

      {auth.user ? (
        <UserHeroBanner />
      ) : (
        <AgentHeroBanner
          header="Zelipha Onyeoma"
          text="Expert dealer in Residential Homes and Luxury apartments. Licensed in Canada and Asia. Trusted by experts and companies with 4.5 rating in Trustpilot."
          // TODO implement: switch over to Contact Agent whenever page is viewed by public user.
          label="List a Property"
        />
      )}

      <ExpertSection
        header="Meet Expert Agents"
        text="We have certified experts ready to attend to you"
      />
      <Footer />
    </div>
  );
}

export default AgentDashboard;

import { NavLink } from "react-router-dom";

const UserHeroBanner = (props) => {
  return (
    <div className="max-w-[1440px] mx-auto py-5 px-10   text-center">
      <h1 className="pb-4 text-4xl md:text-6xl">
        Welcome to your user dashboard.
      </h1>
      <h5>You can save properties and access the details anytime you visit</h5>
      <button className="mt-10 w-[200px]">
        <NavLink className="" to="/AgentForm">
          Become an Agent
        </NavLink>
      </button>
    </div>
  );
};

export default UserHeroBanner;

import React from "react";
import logo from "../../assets/housify.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full rounded-t-[90px] md:rounded-t-[120px] bg-purple-900">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-20 pb-5 px-10 md:px-20 text-center md:text-left md:grid grid-cols-4 gap-20">
        {/* footer header */}
        <div className="col-span-2 pt-10 md:pt-0">
          <h2 className="font-medium">Do You Have Questions With Anything?</h2>
          <p className="py-6 md:pr-10">Receive Updates, discount rates, expert services, payment details, tutorials sent direct to your inbox.</p>
          <div className="md:pr-10">
            <form className="relative pb-4" method="Post" action="">
              <input type={"email"} value={""} className="email rounded-full py-4 px-6 w-full text-black outline-0" placeholder="Enter email" />
              <button className="absolute right-0 rounded-full rounded-l-none py-4 px-6 bg-purple-500 hover:bg-purple-700">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-row md:flex-row justify-between py-4 items-center">
            {/* brand logo goes to top on click */}
            <div className="">
              <a className="" href="/">
                <img className="h-8 w-70" src={logo} alt="Housify Logo" />
              </a>
            </div>

            {/* media icons */}
            <div className="flex flex-row py-8 md:py-0 text-[30px] md:pr-10">
              <div className="px-2 hover:scale-110 duration-300">
                <FaFacebook className="" />
              </div>
              <div className="px-2 hover:scale-110 duration-300">
                <FaInstagram />
              </div>
              <div className="px-2 hover:scale-110 duration-300">
                <FaLinkedin />
              </div>
              <div className="px-2 hover:scale-110 duration-300">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 l:pl-10 gap-10">
          {/* footer links */}
          <div className="">
            <h3 className="">Links</h3>
            <div className="py-4 ">
              <NavLink className=" block text-base" to="/">
                <p className="text-l">Home</p>
              </NavLink>
              <NavLink className="pt-4 text-base block" to="/about">
                <p className="text-l"> Learn More</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/property">
                <p className="text-l">View More Properties</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/agent">
                <p className="text-l">Find An Agent</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/contact">
                <p className="text-l">Let's Hear From You</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/agentDashboard">
                <p className="text-l">Agent Dashboard</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/AgentForm">
                <p className="text-l">Become an Agent</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/loginForm">
                <p className="text-l">Login</p>
              </NavLink>
            </div>
          </div>
          {/* Blog */}
          <div className="">
            <h3 className="">Blog</h3>
          </div>
        </div>
      </div>

      <div className="text-center py-6 text-black text-xl">
        <p>Copyright Housify 2022</p>
      </div>
    </div>
  );
}

export default Footer;

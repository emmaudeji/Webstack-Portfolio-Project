import React from "react";
import logo from "../../assets/housify.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header bg-black h-20 flex justify-around pt-6">
      <img className="h-8 w-70" src={logo} alt="logo" />
      <nav className="text-white flex justify-around ">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-600 mr-10" : "white mr-10")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-purple-600 mr-10" : "white mr-10")}>
          About
        </NavLink>
        <NavLink to="/property" className={({ isActive }) => (isActive ? "text-purple-600 mr-10" : "white mr-10")}>
          Property
        </NavLink>
        <NavLink to="/agent" className={({ isActive }) => (isActive ? "text-purple-600 mr-10" : "white mr-10")}>
          Agent
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-purple-600 mr-10" : "white mr-10")}>
          Contact
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-purple-600 mr-10" : "white mr-10")}>
          Blog
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

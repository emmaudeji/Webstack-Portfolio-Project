import React from "react";
import logo from "../../assets/housify.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header bg-black h-20 flex justify-around pt-6">
      <img className="h-8 w-70" src={logo} />
      <nav className="text-white flex justify-around ">
        <Link className="mr-10" to="/">
          Home
        </Link>

        <Link className="mr-10" to="/about">
          About
        </Link>

        <Link className="mr-10" to="/property">
          Property
        </Link>

        <Link className="mr-10" to="/agent">
          Agent
        </Link>

        <Link className="mr-10" to="/contact">
          Contact
        </Link>

        <Link className="mr-10" to="/blog">
          Blog
        </Link>
      </nav>
    </div>
  );
}

export default Header;

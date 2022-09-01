import React, { useState } from "react";
import logo from "../../assets/housify.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="Header bg-zinc-900 w-full">
      <div className="max-w-[1440px] mx-auto py-6 px-10 flex justify-between">
        <div>
          <img className="h-8 w-70" src={logo} />
        </div>
        <div className="hidden md:flex">
          <nav className="flex items-center">
            <Link className="mr-6" to="/">
              Home
            </Link>
            <Link className="mr-6" to="/about">
              About
            </Link>
            <Link className="mr-6" to="/property">
              Property
            </Link>
            <Link className="mr-6" to="/agent">
              Agent
            </Link>

            <Link className="mr-6" to="/contact">
              Contact
            </Link>

            <Link className="mr-6" to="/blog">
              Blog
            </Link>
            <button className="">
              <Link className="" to="/UserForm">
                Get Started
              </Link>
            </button>
          </nav>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden mr-0">
          {nav ? <AiOutlineClose size={30} className="" /> :
            <AiOutlineMenu size={30} className="" />}

        </div>

        {/* Mobile Menu */}
        <div className={nav ? "w-full left-0 flex justify-center text-center bg-zinc-900 top-[80px] absolute" : "absolute left-[-100%]"}>
          <nav className="mb-4">
            <Link className="block p-3 text-xl" to="/">
              Home
            </Link>
            <Link className="block p-3 text-xl" to="/about">
              About
            </Link>
            <Link className="block p-3 text-xl" to="/property">
              Property
            </Link>
            <Link className="block p-3 text-xl" to="/agent">
              Agent
            </Link>
            <Link className="block p-3 text-xl" to="/contact">
              Contact
            </Link>
            <Link className="block p-3 text-xl" to="/blog">
              Blog
            </Link>
            <button className="block m-4">
              Get Started
            </button>
          </nav>
        </div>

      </div>

    </div>
  );
}

export default Header;

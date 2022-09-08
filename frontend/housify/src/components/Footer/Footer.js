import React from "react";
import logo from "../../assets/housify.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full rounded-t-[90px] md:rounded-t-[120px] bg-purple-900">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-20 pb-5 px-10 flex-col justify-between text-center md:text-left md:grid grid-cols-4 gap-12">
        {/* footer header */}
        <div className="col-span-2 pt-10 md:pt-0">
          <h3 className="text-[#FF00FF]">Do You Have Questions With Anything?</h3>
          <p className="py-6">Receive Updates, discount rates, expert services, payment details, tutorials sent direct to your inbox.</p>
          <div>
            <form className="relative" method="Post" action="">
              <input type={"email"} value={""} className="email rounded-full py-4 px-6 w-full text-black outline-0" placeholder="Enter email" />
              <button className="absolute right-0 rounded-full py-4 px-6 bg-pink-700 hover:bg-purple-700">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row justify-between py-10 items-center">
            {/* brand logo goes to top on clic */}
            <div className="">
              <a className="" href="/">
                <img className="h-8 w-70" src={logo} alt="Housify Logo" />
              </a>
            </div>
            {/* media icons */}
            <div className="flex flex-row py-8 md:py-0">
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaFacebook className="text-sky-600" />
              </div>
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaInstagram className="text-[#F77737]" />
              </div>
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaLinkedin className="text-sky-700" />
              </div>
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaTwitter className="text-sky-500" />
              </div>
            </div>
          </div>
        </div>

        {/* footer links */}
        <div className=" col-span-1 md:ml-20">
          <h3 className="text-[#FF00FF]">Links</h3>
          <div className="py-4 text-xl">
            <Link className="block text-base" to="/">
              Home
            </Link>
            <Link className="pt-4 text-base block" to="/about">
              About
            </Link>
            <Link className="pt-4 block text-base" to="/property">
              Property
            </Link>
            <Link className="pt-4 block text-base" to="/agent">
              Agent
            </Link>
            <Link className="pt-4 block text-base" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Blog */}
        <div className="col-span-1 pt-8 md:pt-0">
          <h3 className="text-[#FF00FF]">Blog</h3>
        </div>
      </div>

      <div className="text-center py-6 text-black font-semibold text-xl">
        <p>Copyright Housify 2022</p>
      </div>
    </div>
  );
}

export default Footer;

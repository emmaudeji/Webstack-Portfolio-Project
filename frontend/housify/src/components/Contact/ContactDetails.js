import React from "react";
// import HiOutlineLocationMarker from "react-icons/hi";
import FiClock from "react-icons/fi";
import AiOutlinePhone from "react-icons/ai";
import HiOutlineMail from "react-icons/hi";

function ContactDetails() {
  return (
    <div className="bg-zinc-800 mt-20 py-40">
      <div className="ContactDetails flex justify-center max-w-[1440px] w-full ">
        <div className="flex flex-col justify-center  px-10 md:px-16  sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10 divide-x">
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                {/* <HiOutlineLocationMarker /> */}
              </div>
              <h5>Nigeria</h5>
              <p className="p4">7 Mcc Avenue, Osborn Center, Lagos</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                {/* <FiClock /> */}
              </div>
              <h5>Business Hour</h5>
              <p className="p4">7Mon - Sun 09:00 - 20:00</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                {/* <AiOutlinePhone /> */}
              </div>
              <h5>Call Us</h5>
              <p className="p4">+14 4577 8901</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                {/* <HiOutlineMail /> */}
              </div>
              <h5>Email Us</h5>
              <p className="p4">housify@contact.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;

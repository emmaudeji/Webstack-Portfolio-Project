import { React, useState } from "react";

function ContactFormSection() {
  // implementing state and hooks

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      alert(`Form Submited!         
         Thanks ${inputs.firstName}  for your feedback. You will hear from us soon.`);
    }

    setInputs("");
  };

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="ContactFormSection flex flex-col sm:grid grid-cols-2 gap-6 w-full w-max-1440 py-10">
      <div className="">
        <div>
          <h4>FAQ</h4>
          <p>
            Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
          <div className="pl-2">
            <p className="border-b-2 py-2">
              <span className="font-bold]">+</span>Donec sollicitudin molestie
              malesuada.
            </p>
            <p className="border-b-2 py-2">
              <span className="font-bold]">+</span>Donec sollicitudin molestie
              malesuada.
            </p>
            <p className="border-b-2 py-2">
              <span className="font-bold]">+</span>Donec sollicitudin molestie
              malesuada.
            </p>
            <p className="border-b-2 py-2">
              <span className="font-bold]">+</span>Donec sollicitudin molestie
              malesuada.
            </p>
            <p className="border-b-2 py-2">
              <span className="font-bold]">+</span>Donec sollicitudin molestie
              malesuada.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-zinc-800 w-90% rounded-[50px] rounded-tr-none p-6 text-left">
          <form onSubmit={handleSubmit} action="" method="">
            <div>
              <h5 className="font-thin pb-4 text-5xl">Get In Touch</h5>
              <p>
                Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit
                amet, consectetur
              </p>
            </div>

            <div>
              <label className="">Full Name</label>
              <input
                className="formInput"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={inputs.name}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Email Address</label>
                <input
                  className="formInput"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={inputs.email}
                  placeholder="email@email.com"
                  required
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  className="formInput"
                  type="number"
                  name="phoneNumber"
                  onChange={handleInputChange}
                  placeholder="Enter Phone number"
                  value={inputs.phoneNumber}
                  required
                />
              </div>
            </div>
            <div>
              <label>Message</label>
              <input
                className="formInput h-[220px]"
                type="textarea"
                name="message"
                onChange={handleInputChange}
                placeholder=""
                value={inputs.message}
                required
              />
            </div>
            <div className="mx-auto text-center text-2xl">
              <button type="submit button" className="px-14 py-6">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactFormSection;

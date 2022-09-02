import { React, useState } from "react";

const Form = (props) => {
  // implementing state and hooks

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}
         
         Thank you for registering`);
    }
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
    <div className="w-full  mx-auto py-20 px-10 flex-col justify-between text-center md:flex-row bg-zinc-800 my-10">
      {/* testing form */}
      <div className="p-6 mx-auto my-auto">
        <h4>
          Hello {inputs.firstName} {inputs.lastName}
        </h4>
        <p>{inputs.email}</p>
      </div>

      <div className="md:mx-[500px] text-xl text-left ">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="">
              <div className="w-full">
                <label className="block mb-2">First Name</label>
                <input
                  className="mb-6 w-full rounded-md text-black bg-zinc-300 focus:outline-none p-2 hover:bg-zinc-50 duration-300"
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  value={inputs.firstName}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2">Last Name</label>
                <input
                  className="mb-6 w-full rounded-md text-black bg-zinc-300 focus:outline-none p-2 hover:bg-zinc-50 duration-300"
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  value={inputs.lastName}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label>Email Address</label>
            <input
              className="mb-6 w-full rounded-md text-black bg-zinc-300 focus:outline-none p-2 hover:bg-zinc-50 duration-300"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="mb-6 w-full rounded-md text-black bg-zinc-300 focus:outline-none p-2 hover:bg-zinc-50 duration-300"
              type="password"
              name="password1"
              onChange={handleInputChange}
              value={inputs.password1}
            />
          </div>
          <div>
            <label>Re-enter Password</label>
            <input
              className="mb-6 w-full rounded-md text-black bg-zinc-300 focus:outline-none p-2 hover:bg-zinc-50 duration-300"
              type="password"
              name="password2"
              onChange={handleInputChange}
              value={inputs.password2}
            />
          </div>
          <button type="submit button ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

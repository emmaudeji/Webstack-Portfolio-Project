import { React, useState } from "react";

const Form = () => {
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
    <div className="w-full  mx-auto py-20 px-10  justify-between text-center  bg-zinc-800 my-10">
      {/* testing form */}
      {/* <h4>
          Hello {inputs.firstName} {inputs.lastName}
        </h4>
        <p>{inputs.email}</p> */}

      <form onSubmit={handleSubmit}>
        <div className=" md:mx-[100px] md:grid grid-cols-2 gap-10  text-xl text-left pb-10">
          <div>
            <h2 className="font-thin text-left pb-4 text-5xl">
              Personal Details
            </h2>
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
              <label>Address</label>
              <input
                className="formInput"
                type="text"
                name="address"
                onChange={handleInputChange}
                placeholder="Enter your address"
                value={inputs.address}
                required
              />
            </div>
            <div>
              <label>City</label>
              <input
                className="formInput"
                type="text"
                name="city"
                onChange={handleInputChange}
                placeholder="Enter yout city"
                value={inputs.city}
              />
            </div>
            <div>
              <label>Country</label>
              <input
                className="formInput"
                type="text"
                name="country"
                onChange={handleInputChange}
                placeholder="Enter country of residence"
                value={inputs.country}
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
            <h2 className="font-thin text-left pb-4 text-5xl">
              Professional Details
            </h2>
            <div>
              <label>Bio: State Your Professional Summary</label>
              <input
                className="formInput min-h-[150px]"
                type="textarea"
                name="bio"
                onChange={handleInputChange}
                placeholder=""
                value={inputs.bio}
                required
              />
            </div>
            <div>
              <label>Profile Picture</label>
              <input
                className="formInput"
                type="text"
                name="imageUrl"
                onChange={handleInputChange}
                placeholder=""
                value={inputs.bio}
                required
              />
            </div>
            <div>
              <label>LinkedIn Address</label>
              <input
                className="formInput"
                type="text"
                name="linkedin"
                onChange={handleInputChange}
                placeholder="Enter Linkedin address"
                value={inputs.linkedin}
                required
              />
            </div>
            <div>
              <label>Twitter Address</label>
              <input
                className="formInput"
                type="text"
                name="twitter"
                onChange={handleInputChange}
                placeholder="Enter Twitter address"
                value={inputs.twitter}
              />
            </div>
            <div>
              <label>Whatsapp number</label>
              <input
                className="formInput"
                type="number"
                name="twitter"
                onChange={handleInputChange}
                placeholder="Enter Whatsapp number"
                value={inputs.whatsapp}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto text-center text-2xl">
          <button type="submit button" className="px-14 py-6">
            Submit
          </button>
        </div>
      </form>
    </div>

    // // First Name
    // Surname
    // Address
    // City
    // State
    // Country
    // Zip code
    // Phone Number
    // LinkedIn
    // Tweeter
    // Email
    // Whatapp
  );
};

export default Form;

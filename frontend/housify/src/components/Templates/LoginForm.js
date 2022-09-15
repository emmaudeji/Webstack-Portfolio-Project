import { React, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LoginForm = (props) => {
  // implementing state and hooks

  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      alert(`Welcome ${inputs.email}!
         `);
    }
    setInputs({
      password: "",
      email: "",
    });
  };

  const handleInputChange = async (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="Property">
      <Header />
      <div className="w-full mx-auto p-10 text-center">
        <h2 className="font-semibold">SignUp For The Best Experience?</h2>
      </div>
      <div className="py-20 px-10 text-center  bg-zinc-800 my-10">
        {/* testing form */}
        {/* <h4>
          Hello {inputs.email} {inputs.password} {inputs.repeatPassword}
        </h4> */}

        <form onSubmit={handleSubmit}>
          <div className="flex  text-left h-[350px] mb-10 justify-center align-middle text-xl ">
            <div className="w-[400px]">
              <h2 className="font-thin  pb-4 text-5xl">Login</h2>

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
                <label>Password</label>
                <input
                  className="formInput"
                  type="password"
                  mx-auto
                  py-20
                  px-10
                  justify-between
                  text-center
                  name="password"
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  value={inputs.password}
                />
              </div>

              <div className="mx-auto text-left text-xl">
                <button type="submit button" className="px-10 py-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;

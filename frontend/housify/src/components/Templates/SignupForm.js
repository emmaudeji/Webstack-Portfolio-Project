import { React, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// <<<<<<< HEAD
// import { useNavigate, Route, Routes } from "react-router-dom";
// import LoginForm from "../Templates/LoginForm";
// =======
// import {useNavigate, Route, Routes} from "react-router-dom";
// // import LoginForm from "/LoginForm";

// const SignupForm = (props) => {
//   // implementing state and hooks
// >>>>>>> 9a244ddd0097aacc24f6f8f1d81864d1914287a2

const SignupForm = () => {
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
    repeatPassword: "",
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
      repeatPassword: "",
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
  // const navigate = useNavigate();

  // const navigateToHome = () => {
  //   navigate("LoginForm");
  // };

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
        {/* <Routes>
          <Route path="LoginForm" element={<LoginForm />} />
        </Routes> */}

        <form onSubmit={handleSubmit}>
          <div className="flex  text-left h-[350px] mb-10 justify-center align-middle text-xl ">
            <div className="w-[400px]">
              <h2 className="font-thin  pb-4 text-5xl">Sign up</h2>

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

              <div>
                <label>Renter Password</label>
                <input
                  className="formInput"
                  type="password"
                  mx-auto
                  py-20
                  px-10
                  justify-between
                  text-center
                  name="repeatPassword"
                  onChange={handleInputChange}
                  placeholder="Renter Password"
                  value={inputs.repeatPassword}
                />
              </div>
              <div className="mx-auto text-left text-xl">
                {/* <button onClick={NavigateToLoginForm}>Submit</button> */}
                {/* <button onClick={navigateToHome} cl></button> */}
                <button>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

// function LoginForm() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

export default SignupForm;

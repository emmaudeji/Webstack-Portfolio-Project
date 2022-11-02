import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const baseUrl = "http://127.0.0.1:5000";

const SignupForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
    repeatPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password === inputs.repeatPassword) {
      const data = await axios.post(`${baseUrl}/signup`, {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
      const success = data.data.success;
      console.log("DATA: ", data.data.success);

      success ? navigate("/loginForm", { replace: true }) : alert("Try again");
    } else {
      alert("password does not match");
      setInputs({
        username: inputs.username,
        email: inputs.email,
        password: "",
        rePassword: "",
      });
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
    <div className="Property">
      <Header />
      {/* <div className="w-full mx-auto p-10 text-center">
        <p className="font-thin  text-4xl">SignUp For The Best Experience?</p>
      </div> */}

      <form onSubmit={handleSubmit}>
        <div className="flex  text-left py-10 bg-zinc-700 mb-10 justify-center align-middle text-xl ">
          <div className="w-[400px]">
            <div className="grid grid-cols-2  mb-4 align-middle">
              <div
                className="bg-zinc-900 flex justify-center align-middle py-4"
                onClick={() => navigate("/userForm")}
              >
                Sign up
              </div>
              <div
                className="bg-zinc-800 flex justify-center align-middle py-4"
                onClick={() => navigate("/loginForm")}
              >
                Login
              </div>
            </div>
            <div>
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                name="username"
                onChange={handleInputChange}
                value={inputs.username}
                placeholder="user"
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
              <label>Password</label>
              <input
                className="formInput "
                type="password"
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

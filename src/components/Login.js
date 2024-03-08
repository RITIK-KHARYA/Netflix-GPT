import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <div className="-ml-8">
          <h1 className="font-bold text-3xl py-4 text-white text-center ml-6 ">
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </h1>
         {!IsSignInForm ? <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 w-full bg-gray-700"
          /> : ""}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-4 w-full bg-gray-700"
          />
          <button className="py-2 m-4 bg-red-500 w-full">
            {IsSignInForm ? "Sign In" : "Sign Up"}{" "}
          </button>
          <p
            className="py-4 text-white text-sm ml-10 text-center cursor-pointer"
            onClick={toggleSignInForm}
          >
            {IsSignInForm
              ? "New To Netflix? Sign Up Now"
              : "Already Registered "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

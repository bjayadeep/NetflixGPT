import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="login-background"
      />

      <form className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-black/80 p-12 rounded-lg flex flex-col w-1/3 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 mb-4 bg-gray-800 rounded text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-4 bg-gray-800 rounded text-white"
        />

        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 mb-4 bg-gray-800 rounded text-white"
          />
        )}

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

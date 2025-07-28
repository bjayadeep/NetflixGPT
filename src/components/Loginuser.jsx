import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { addUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Loginuser = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const fullName = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const confirmPasswordValue = confirmPassword.current?.value;
    const fullNameValue = fullName.current?.value;

    if (
      !emailValue ||
      !passwordValue ||
      (!isSignIn && (!confirmPasswordValue || !fullNameValue))
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!isSignIn && passwordValue !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      let userCredential;
      if (isSignIn) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        await updateProfile(userCredential.user, {
          displayName: fullNameValue,
        });
      }

      const user = userCredential.user;
      dispatch(
        addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || fullNameValue,
        })
      );

      navigate("/browse");
    } catch (error) {
      let message = "Something went wrong!";
      switch (error.code) {
        case "auth/wrong-password":
          message = "Incorrect password.";
          break;
        case "auth/user-not-found":
          message = "User not found.";
          break;
        case "auth/invalid-email":
          message = "Invalid email address.";
          break;
        case "auth/email-already-in-use":
          message = "Email is already in use.";
          break;
        case "auth/invalid-credential":
          message = "Invalid credentials. Please try again.";
          break;
        default:
          message = error.message;
      }
      setErrorMessage(message);
    }
  };

  const user = useSelector((state) => state.user);

  if (user) {
    return <Navigate to="/browse" replace />;
  }

  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="w-full h-screen object-cover brightness-[.6] absolute -z-10"
        src="/movies_background.jpg"
        alt="login-background"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-black bg-opacity-80 p-10 rounded-md w-[90%] max-w-md text-white shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignIn && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-3 mb-4 w-full bg-gray-800 rounded text-white"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="p-3 mb-4 w-full bg-gray-800 rounded text-white"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 mb-4 w-full bg-gray-800 rounded text-white"
        />

        {!isSignIn && (
          <input
            type="password"
            ref={confirmPassword}
            placeholder="Confirm Password"
            className="p-3 mb-4 w-full bg-gray-800 rounded text-white"
          />
        )}

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-bold cursor-pointer"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="mt-4 text-sm cursor-pointer text-gray-400 hover:underline"
          onClick={toggleSignIn}
        >
          {isSignIn
            ? "New to NetflixGPT? Sign up now."
            : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Loginuser;

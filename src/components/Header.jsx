import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // useNavigate is still needed for signOut
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { ChevronDown } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Keep navigate for signOut
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/"); // Navigate after sign out
      })
      .catch((error) => {
        console.error("Sign-out failed:", error);
      });
  };

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleGptSearchClick = () => {
    // This button will now ONLY toggle the Redux state.
    // The conditional rendering in Browse.jsx will handle showing/hiding GptSearchpage.
    dispatch(toggleGptSearchView());
    // No navigation needed here, as it's a toggle within the same page.
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black to-transparent h-20 w-full fixed top-0 z-50">
      {/* Netflix Logo */}
      <Link to="/">
        <img
          className="w-36 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>

      {/* Right Side*/}
      {user && (
        <div className="flex items-center gap-4">
          {/* GPT Search Button */}
          <button
            onClick={handleGptSearchClick}
            className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          {/* Language Selector */}
          {showGptSearch && <LanguageSelector />}

          <div className="relative flex items-center gap-2">
            {/* Profile Icon */}
            <img
              onClick={toggleMenu}
              className="w-10 h-10 rounded cursor-pointer border-2 border-white"
              src="/user_profile.jpg"
              alt="User"
            />

            {/* Arrow Icon */}
            <ChevronDown
              className="text-white cursor-pointer"
              size={20}
              onClick={toggleMenu}
            />

            {/* Dropdown */}
            {showMenu && (
              <div className="absolute top-14 right-0 bg-black text-white shadow-lg rounded-md p-4 min-w-[180px] z-50">
                <p className="mb-2 text-sm text-gray-300">
                  User: {user.displayName || "Guest"}
                </p>
                <button
                  onClick={handleSignOut}
                  className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md font-bold text-sm"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

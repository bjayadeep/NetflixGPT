import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; 
import { auth } from "../utils/firebase"; 
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { ChevronDown, ListPlus, User } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const isPlaying = useSelector((store) => store.movies.isPlaying);
    
    const [showMenu, setShowMenu] = useState(false);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser()); 
                navigate("/"); 
            })
            .catch((error) => {
                console.error("Sign-out failed:", error);
            });
    };

    const toggleMenu = () => setShowMenu((prev) => !prev);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
        navigate("/browse");
    };

    const handleMyListClick = () => {
        navigate("/liked");
        setShowMenu(false);
    };

    const handleHomepageClick = () => {
        dispatch(toggleGptSearchView(false));
        navigate("/browse");
    };

    if (isPlaying) {
        return null;
    }

    return (
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black to-transparent h-20 w-full fixed top-0 z-50">
            {/*homepage */}
            <Link to="/browse" onClick={handleHomepageClick}>
                <img
                    className="w-36 cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                />
            </Link>

            {user && (
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleGptSearchClick}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>
                    
                    <button
                        onClick={handleMyListClick}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition flex items-center gap-2"
                    >
                        <ListPlus size={20} /> My List
                    </button>

                    {showGptSearch && <LanguageSelector />}

                    <div className="relative flex items-center gap-2">
                        {/*dropdown */}
                        <img
                            onClick={toggleMenu}
                            className="w-10 h-10 rounded cursor-pointer border-2 border-white"
                            src="/user_profile.jpg"
                            alt="User"
                        />

                        <ChevronDown
                            className="text-white cursor-pointer"
                            size={20}
                            onClick={toggleMenu}
                        />

                        {showMenu && (
                            <div className="absolute top-14 right-0 bg-black text-white shadow-lg rounded-md p-4 min-w-[180px] z-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <User size={20} />
                                    <p className="text-sm text-gray-300">
                                        {user.displayName || "Guest"}
                                    </p>
                                </div>
                                <hr className="border-gray-700 mb-2" />
                                <button
                                    onClick={handleMyListClick}
                                    className="w-full text-left py-2 px-4 rounded-md font-bold text-sm hover:bg-gray-800 flex items-center gap-2 transition"
                                >
                                    <ListPlus size={20} /> My List
                                </button>
                                <hr className="border-gray-700 my-2" />
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
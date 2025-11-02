import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios"; // your axios instance
import logo from "../../Images/Icon/Watch Me.svg";
import searchIcon from "../../Images/Icon/search.svg";
import bell from "../../Images/Icon/bell.svg";
import profile from "../../Images/Icon/profile.png";
import down from "../../Images/Icon/down.svg";

const base_url = "https://image.tmdb.org/t/p/original/";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef();

  const toggleNotifications = () => setShowNotifications(prev => !prev);

  // Click outside to close search input
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setQuery("");
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch movies/TV shows
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`/search/multi?query=${query}`);
        setResults(response.data.results || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [query]);

  return (
    <nav className="w-full px-6 py-2.5 flex justify-between items-center fixed text-white z-10 bg-black/80 backdrop-blur-md">
      
      {/* Left Side: Logo and Links */}
      <div className="flex items-center gap-6">
        <img src={logo} alt="Logo" className="w-36 h-auto" />

        {/* Links for medium and larger screens */}
        <ul className="hidden md:flex list-none gap-5">
          <li><Link to="/Home" className="no-underline text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/movie" className="no-underline text-white hover:text-gray-300">Movie</Link></li>
          <li><Link to="/TVShows" className="no-underline text-white hover:text-gray-300">TV Shows</Link></li>
          <li><Link to="/NewAndPopular" className="no-underline text-white hover:text-gray-300">New & Popular</Link></li>
          <li className="cursor-pointer text-white">My List</li>
        </ul>
      </div>

      {/* Right Side: Search, Bell, Profile, Hamburger */}
      <div className="flex items-center gap-5 relative">

        {/* Search */}
        <div ref={searchRef} className="relative flex items-center">
          {showSearch && (
            <input
              type="text"
              placeholder="Search movies or TV shows..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="absolute right-10 w-64 px-3 py-1 rounded-md bg-black/80 text-white outline-none z-20"
            />
          )}
          <img
            src={searchIcon}
            alt="search"
            className="w-5 cursor-pointer z-30"
            onClick={() => setShowSearch(prev => !prev)}
          />

          {/* Search Results */}
          {showSearch && results.length > 0 && (
            <div className="absolute right-10 top-full mt-1 w-64 bg-black/90 rounded-md shadow-lg max-h-80 overflow-y-auto z-30">
              {results.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  <img
                    src={item.poster_path ? `${base_url}${item.poster_path}` : "https://via.placeholder.com/40x60"}
                    alt={item.title || item.name}
                    className="w-10 h-14 object-cover rounded"
                  />
                  <div className="text-sm">
                    <p>{item.title || item.name}</p>
                    <span className="text-gray-400 text-xs">
                      {item.media_type === "movie" ? "Movie" :
                        item.media_type === "tv" ? "TV Show" : "Other"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Children Text */}
        <p className="m-0 p-0 flex items-center hidden md:flex">Children</p>

        {/* Bell Icon */}
        <div className="relative">
          <img
            src={bell}
            alt="bell"
            className="w-5 cursor-pointer"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-48 bg-black/90 text-white text-sm rounded shadow-lg p-3 z-20">
              <p className="text-center">No notifications</p>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer hidden md:flex">
          <img src={profile} alt="profile" className="w-[35px] rounded" />
          <img src={down} alt="down" className="w-4" />
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-6"
          >
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black/90 flex flex-col gap-2 p-4 md:hidden">
          <li><Link to="/Home" className="no-underline text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/movie" className="no-underline text-white hover:text-gray-300">Movie</Link></li>
          <li><Link to="/TVShows" className="no-underline text-white hover:text-gray-300">TV Shows</Link></li>
          <li><Link to="/NewAndPopular" className="no-underline text-white hover:text-gray-300">New & Popular</Link></li>
          <li><Link to="/mylist" className="no-underline text-white hover:text-gray-300">My List</Link></li>

          <li className="cursor-pointer text-white">My List</li>
          <li className="flex items-center gap-2 mt-2">
            <p>Children</p>
            <img src={profile} alt="profile" className="w-[35px] rounded" />
            <img src={down} alt="down" className="w-4" />
          </li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;

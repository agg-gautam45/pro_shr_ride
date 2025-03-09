import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext.js";
import { useAuth } from "../../Contexts/auth.js";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [auth, setAuth] = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <header className="flex justify-between p-2">
      <Link to={"/"} className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className="font-bold text-xl">Delbil</span>
      </Link>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">

      <Link to={'/available-rides'}>
        <button className="mx-4 bg-primary text-white rounded-full p-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded">
          Search a Ride
        </button>
      </Link>

        <div className="border-l border-gray-300"></div>


        <Link to={'/pick'}>
        <button className="mx-4 bg-primary text-white rounded-full p-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded">
          Publish a Ride
        </button>
      </Link>
      </div>


      <div className="relative inline-block w-40 text-left rounded-full">
        <div className="flex items-center w-40 border border-gray-300 rounded-full py-1 px-1 ">
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-slate-50 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleToggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 24"
              fill="currentColor"
              className="w-7 h-7 relative "
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg transition-all duration-300 ${
            dropdownOpen ?  "opacity-0 scale-95":"opacity-100 scale-100"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {!auth.user ? (
            <>
              <div className="py-1" role="none">
                <Link
                  to="/login"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                  onClick={handleToggleDropdown}
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="py-1" role="none">
                <Link
                  to="/"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                  onClick={handleToggleDropdown}
                >
                  Profile
                </Link>
                <div className="py-1" role="none">
                  <Link
                    to="/"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={handleLogout}
                  >
                    LogOut
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

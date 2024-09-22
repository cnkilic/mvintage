import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Mvintage Logo" className="h-8" />
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Main Navigation (Hidden on Mobile, Visible on Desktop) */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-2 md:space-y-0 md:space-x-8 absolute md:static left-0 top-full md:top-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-20 p-4 md:p-0`}
        >
          <a href="/" className="text-gray-700 hover:text-black">
            BIEB
          </a>
          <a href="/" className="text-gray-700 hover:text-black">
            TRITONI
          </a>
          <a href="/" className="text-gray-700 hover:text-black">
            NEW IN
          </a>

          {/* Dropdown for Jewellery */}
          <div className="relative group md:static">
            <button
              className="text-gray-700 hover:text-black flex items-center md:inline-block"
              onClick={toggleDropdown}
            >
              JEWELLERY
            </button>

            {/* Dropdown Menu */}
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent mt-2 shadow-lg md:shadow-none z-10`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                <div>
                  <h4 className="font-semibold text-lg">LATEST</h4>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a href="/" className="text-gray-600 hover:text-black">
                        BIEB
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-600 hover:text-black">
                        KAVALLIERI
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">CORE</h4>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a href="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="/" className="text-gray-700 hover:text-black">
            COLLECTIONS
          </a>
          <a href="/" className="text-gray-700 hover:text-black">
            ACCESSORIES
          </a>
          <a href="/" className="text-gray-700 hover:text-black">
            GIFTS
          </a>
        </nav>

        {/* Right Section with Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-black">
            <FaSearch />
          </button>
          <button className="text-gray-700 hover:text-black">
            <FaUser />
          </button>
          <button className="relative text-gray-700 hover:text-black">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

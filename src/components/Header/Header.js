import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

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
    <header className="border-b border-gray-200 h-16">
      <div className="container mx-auto px-8 flex items-center justify-between h-full w-full">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/images/headerlogo.webp"
            alt="Mvintage Logo"
            className="h-8"
          />
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Main Navigation (Hidden on Mobile, Visible on Desktop) */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } items-center h-full md:flex space-y-2 md:space-y-0 md:space-x-8 absolute top-8 w-full md:static left-0  md:top-auto md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-20 p-4 md:p-0`}
        >
          <Link
            to="/"
            className="text-gray-700 hover:text-black hover:border-b-2  hover:border-gray-900  flex h-full items-center"
          >
            BIEB
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black hover:border-b-2  hover:border-gray-900  flex h-full items-center"
          >
            TRITONI
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black hover:border-b-2  hover:border-gray-900  flex h-full items-center"
          >
            NEW IN
          </Link>

          {/* Dropdown for Jewellery */}
          <div className="relative group md:static h-full">
            <Link
              to="/"
              className="text-gray-700 hover:text-black flex items-center h-full hover:border-b-2  hover:border-gray-900"
              onClick={toggleDropdown}
            >
              JEWELLERY
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block  absolute top-16 z-10 inset-x-0 w-full left-0 md:w-auto bg-white shadow-lg ease-linear duration-75 transition-all`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-12 px-8">
                <div>
                  <Link to="/" className="font-semibold text-lg">
                    PENDANTS
                  </Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        A PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        B PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        C PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        D PENDANTS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">CHAINS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">BRACELETS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">ERRINGS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">RINGS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black ">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group md:static h-full">
            <Link
              to="/"
              className="text-gray-700 hover:text-black flex items-center  h-full hover:border-b-2  hover:border-gray-900"
            >
              COLLECTIONS
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block  absolute top-16 z-10 inset-x-0 w-full left-0 md:w-auto bg-white shadow-lg ease-linear duration-75 transition-all`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-12 px-8">
                <div>
                  <Link to="/" className="font-semibold text-lg">
                    PENDANTS
                  </Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        A PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        B PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        C PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        D PENDANTS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">CHAINS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">BRACELETS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">ERRINGS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="font-semibold text-lg">RINGS</Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black ">
                        MVINTAGE COLLECTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        BIRTHSTONES
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group md:static h-full">
            <Link
              className="text-gray-700 hover:text-black flex items-center h-full hover:border-b-2  hover:border-gray-900"
              to="/"
            >
              ACCESSORIES
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block  absolute top-16 z-10 inset-x-0 w-full left-0 md:w-auto bg-white shadow-lg ease-linear duration-75 transition-all`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-12 px-8">
                <div>
                  <Link to="/" className="font-semibold text-lg">
                    PENDANTS
                  </Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        A PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        B PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        C PENDANTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        D PENDANTS
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className="relative group md:static h-full">
            <Link
              className="text-gray-700 hover:text-black flex items-center h-full hover:border-b-2  hover:border-gray-900"
              to="/"
            >
              GIFTS
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block  absolute top-16 z-10 inset-x-0 w-full left-0 md:w-auto bg-white shadow-lg ease-linear duration-75 transition-all`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-12 px-8">
                <div>
                  <Link to="/" className="font-semibold text-lg">
                    PENDANTS
                  </Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        A PENDANTS
                      </Link>
                    </li>
                 
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        D PENDANTS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link to="/" className="font-semibold text-lg">
                    PENDANTS
                  </Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        A PENDANTS
                      </Link>
                    </li>
                 
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        D PENDANTS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link to="/" className="font-semibold text-lg">
                    PENDANTS
                  </Link>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        A PENDANTS
                      </Link>
                    </li>
                 
                    <li>
                      <Link to="/" className="text-gray-600 hover:text-black">
                        D PENDANTS
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        
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

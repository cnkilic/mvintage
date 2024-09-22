import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Discover */}
        <div>
          <h3 className="text-white font-semibold mb-4">DISCOVER</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Our Story</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Store Locator</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Blog</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">CUSTOMER SUPPORT</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Jewellery Care</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Sunglasses Care</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Delivery & Returns</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Warranty</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">LEGAL</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Data protection</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Cookie Policy</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Sign Up */}
        <div className="col-span-2">
          <h3 className="text-white font-semibold mb-4">SIGN UP!</h3>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-sm border-gray-200 border-2 p-2 w-full bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="border-gray-200 border-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-sm text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex justify-between">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <p>Mconcepts Limited</p>
          <p>Address: 1, Triq ic-Citru c/w Triq Dun Karm, Iklin IKL9030</p>
          <p>VAT number: MT21969809</p>
          <p>Company registration no: C66448</p>
        </div>



        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/assets/images/footerLogo.webp"
              alt="Mvintage Logo"
              className="h-12"
            />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex justify-between items-center mt-4">
        <div>
          <select className="bg-gray-800 text-gray-400 p-2 rounded">
            <option>Türkiye (EUR €)</option>
          </select>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex md:justify-end justify-start items-center space-x-4 flex-col gap-3">
          {/* Social Media Icons */}
          <div className="font-semibold">FOLLOW US</div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaPinterest className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center">
        © 2024 Mvintage - Powered by Shopify
      </div>
    </footer>
  );
};

export default Footer;

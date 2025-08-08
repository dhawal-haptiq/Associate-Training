import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterestP } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 container">
        <div>
          <h4 className="text-lg font-semibold mb-4">Shop</h4>
          <div className="flex flex-col space-y-2">
            <Link to="/category/mens-shirts" className="hover:underline">Men</Link>
            <Link to="/category/womens-dresses" className="hover:underline">Women</Link>
            <Link to="/category/women-bags" className="hover:underline">New Arrivals</Link>
            <Link to="/collections/sale" className="hover:underline">Sale</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <div className="flex flex-col space-y-2">
            <Link to="/AboutUs" className="hover:underline">Our Story</Link>
            <Link to="/sustainability" className="hover:underline">Sustainability</Link>
            <Link to="/careers" className="hover:underline">Careers</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
          <div className="flex flex-col space-y-2">
            <Link to="/faq" className="hover:underline">FAQs</Link>
            <Link to="/shipping" className="hover:underline">Shipping & Delivery</Link>
            <Link to="/returns" className="hover:underline">Returns & Exchanges</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Feedback</h4>
          <p className="text-sm mb-4">Want to write any feedback .</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="message"
              className="px-3 py-2 rounded-md text-black w-full sm:flex-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md w-full sm:w-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} La Mode Line. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6 text-xl">
          <Link to="#"><FaFacebookF className="hover:text-pink-400" /></Link>
          <Link to="#"><FaInstagram className="hover:text-pink-400" /></Link>
          <Link to="#"><FaTiktok className="hover:text-pink-400" /></Link>
          <Link to="#"><FaPinterestP className="hover:text-pink-400" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

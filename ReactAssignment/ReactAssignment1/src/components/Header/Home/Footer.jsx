import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white-900 text-black-200 py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 container">
        {/* Shop */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Shop</h4>
          <ul className="space-y-2">
            <li><a href="/collections/men" className="hover:underline">Men</a></li>
            <li><a href="/collections/women" className="hover:underline">Women</a></li>
            <li><a href="/collections/new" className="hover:underline">New Arrivals</a></li>
            <li><a href="/collections/sale" className="hover:underline">Sale</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:underline">Our Story</a></li>
            <li><a href="/sustainability" className="hover:underline">Sustainability</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:underline">Returns & Exchanges</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-4">Get updates on new arrivals and special offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-black w-full sm:flex-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} La Mode Line. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-5" /></a>
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-5" /></a>
          <a href="#"><img src="/icons/tiktok.svg" alt="TikTok" className="h-5" /></a>
          <a href="#"><img src="/icons/pinterest.svg" alt="Pinterest" className="h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

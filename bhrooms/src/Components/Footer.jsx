import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">MNC Rooms</h2>
            <p>Your go-to platform for booking rooms online.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/listings">Listings</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p>Email: info@mncrooms.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const AboutPage = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 text-slate-700">About MNC Rooms</h1>

      <section className="mb-6">
        <h2 className="border-b-2 pb-1 mb-3 text-xl font-semibold text-slate-800">Our Story</h2>
        <p>
          At MNC Rooms, we believe that every journey should be accompanied by a comfortable and welcoming place to stay. Our journey began with a simple idea: to make the process of booking rooms online hassle-free and enjoyable for everyone.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-slate-800 border-b-2 pb-1 mb-3 text-xl font-semibold">What Sets Us Apart</h2>
        <ul className="list-none text-slate-600">
          <li><strong>Quality Accommodations:</strong> We pride ourselves on offering a curated selection of high-quality rooms.</li>
          <li><strong>User-Friendly Booking:</strong> Booking a room with MNC Rooms is as easy as a breeze.</li>
          <li><strong>Diverse Options:</strong> Whether you're a solo traveler or a family on vacation, we have options to suit your preferences.</li>
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority, and our dedicated support team is here to assist you.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-slate-800 border-b-2 pb-1 mb-3 text-xl font-semibold">Our Vision</h2>
        <p>
          Our vision is to redefine the way people book rooms online. We aspire to be the go-to platform for travelers seeking comfort, convenience, and quality in their accommodations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-slate-800 border-b-2 pb-1 mb-3 text-xl font-semibold">Connect With Us</h2>
        <p>
          Have questions, suggestions, or just want to say hello? Connect with us on social media or drop us an email – your feedback is invaluable.
        </p>
      </section>

      <p className="mt-5">Thank you for choosing MNC Rooms. We look forward to being a part of your next memorable journey!</p>
    </div>
  );
};

export default AboutPage;

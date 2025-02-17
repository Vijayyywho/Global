import React from "react";
import { FaHeadset, FaDollarSign, FaWarehouse } from "react-icons/fa"; // Importing icons from FontAwesome

const Services = () => {
  return (
    <div className="p-8 bg-gray-100 my-12 mt-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <p className="text-center text-xl font-normal text-gray-800 mb-10 px-6 sm:px-12">
        For over 25 years, Aristo Flexi Pack has provided quality, reliable
        service, and bespoke plastic film solutions to meet your business needs,
        applications, and budget. Our commitment to exceptional products and
        services ensures unparalleled value for our clients.
      </p>

      {/* Flex container for services and image */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Services */}
        <div className="flex-1 space-y-8">
          {/* Holistic Packaging Consultation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaHeadset className="text-3xl text-blue-500 mr-4" />{" "}
              <h3 className="text-xl font-semibold">
                Holistic Packaging Consultation
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Prompt customer service</li>
              <li>Competitive Pricing</li>
            </ul>
          </div>

          {/* Technical Assistance */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaWarehouse className="text-3xl text-green-500 mr-4" />{" "}
              <h3 className="text-xl font-semibold">Technical Assistance</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Warehousing Services</li>
              <li>Just-In-Time (JIT) Delivery</li>
            </ul>
          </div>

          {/* Competitive Pricing */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaDollarSign className="text-3xl text-yellow-500 mr-4" />{" "}
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cost-effective solutions</li>
              <li>Volume discounts</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <img
            src="https://media.loveitopcdn.com/29911/packing-cargo-1.png" // Replace with your image URL
            alt="Services"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

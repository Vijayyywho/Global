import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 mt-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          About Us - Global Packaging
        </h1>

        {/* Company Info Section */}
        <div className="mb-16 flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-700">
              At Global Packaging, <b>based in Palghar</b> and owned by Prince
              Singh, we specialize in providing customized plastic film
              packaging solutions. Our mission is to work closely with clients
              to deliver top-quality packaging that caters to their specific
              needs.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We have grown significantly over the years, emerging as a leader
              in the packaging industry. Our production facility is located in
              Daman, India, from where we distribute our products all over India
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="https://media.loveitopcdn.com/29911/packing-cargo-1.png" // Replace with relevant image
              alt="Global Packaging"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Mission & Values Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/2 w-full">
            <img
              src="https://www.mediashower.com/img/5E2356EC-71D6-11EC-84FB-8617E7180222/AdobeStock_258782955_600x.jpg" // Replace with relevant image
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700">
              Our mission is to continuously innovate and provide
              cost-effective, sustainable, and reliable packaging solutions for
              all our clients. We focus on delivering superior customer service
              and maintaining a commitment to excellence in every aspect of our
              business.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our core values include integrity, customer-centricity, and
              environmental responsibility. We are dedicated to reducing our
              carbon footprint and promoting sustainability in the packaging
              industry.
            </p>
          </div>
        </div>

        {/* Our Reach Section */}
        <div className="bg-blue-100 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 w-full px-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Nationwide Reach
              </h2>
              <p className="text-lg text-gray-700">
                We proudly distribute our high-quality packaging products to
                clients across India. Our strong logistics network ensures
                prompt deliveries, meeting the diverse needs of businesses
                throughout the country.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src="https://vikingmasek.com/application/files/9014/9971/3599/MG_7859.jpg?t=1499374227310&width=675&height=450&name=_MG_7859.jpg" // Replace with relevant image
                alt="Global Reach"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Have any questions or need further details? We're here to help.
            Reach out to us through the contact details below.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-lg text-gray-700">+91 123 456 7890</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-lg text-gray-700">
                contact@globalpackaging.com
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-lg text-gray-700">
                Global Packaging, Palghar, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

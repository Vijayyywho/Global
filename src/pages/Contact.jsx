import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Address and Contact Details */}
        <div className="space-y-6 lg:space-y-8 px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-center lg:text-left mb-4">
            Contact Us
          </h2>

          <div className="text-lg space-y-3">
            <h3 className="font-semibold text-xl">Our Address:</h3>
            <p>Global Packaging</p>
            <p>Shop No.8 HariOm Business Center,</p>
            <p>ChintuPada Road Bidco ParadiseCity Mahim Village</p>
            <p> palghar(West) Palghar-401404</p>
          </div>

          <div className="text-lg space-y-3">
            <h3 className="font-semibold text-xl">Contact Details:</h3>
            <p>
              Email:{" "}
              <a href=" globalpackaging0911gmail.com" className="text-blue-500">
                globalpackaging0911gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+ +91 77700 75750" className="text-blue-500">
                +91 77700 75750
              </a>
            </p>
            <p>GST:27MCJPS2143D1ZE</p>
          </div>

          <div className="text-lg space-y-3">
            <h3 className="font-semibold text-xl">Business Hours:</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            title="Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.4971483855013!2d72.77820621644418!3d19.66873901476369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c09a5ffb33%3A0xa6f55f8bb13a52ff!2sPalghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677184317033!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

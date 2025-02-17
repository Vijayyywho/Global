// src/pages/Home.js
import React from "react";
import Slider from "../Components/Slider";
import Products from "./Products";
import Services from "./Services";
import StatsSection from "../Components/StatsSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      {/* Slider Section */}
      <Slider />

      {/* About Us Section */}
      <section
        className="relative w-full pt-10 pb-10 bg-cover bg-center"
        style={{ backgroundImage: "url('your-image-url.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-black pl-0 md:pl-10 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              About Us
            </h2>
            <p className="text-lg mb-4">
              At Global Packaging, based in Palghar and owned by Prince Singh,
              we are committed to collaborating with our clients to deliver
              customized plastic film packaging solutions. Our goal is to
              effectively address their challenges and drive their progress by
              providing tailored solutions that meet their specific needs.
            </p>

            <p className="text-lg mb-4">
              Over the years, our company has experienced remarkable growth,
              establishing us as a premier manufacturer of high-quality
              co-extruded films and bags. This success is built on our
              dedication to innovation, quality, and customer satisfaction,
              which have allowed us to expand our reach in the packaging
              industry.
            </p>

            <p className="text-lg">
              Operating from our advanced production facility in Daman, India,
              we distribute our products across India, the Middle East, Africa,
              the Arabian Gulf, and the Americas. We strive to maintain our
              market-leading position by continuously delivering exceptional
              packaging solutions that meet the evolving demands of our clients.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-0 md:p-10">
            <img
              src="https://www.mediashower.com/img/5E2356EC-71D6-11EC-84FB-8617E7180222/AdobeStock_258782955_600x.jpg"
              alt="About Us"
              className="h-[250px] md:h-[350px] w-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <Products />
      <StatsSection />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

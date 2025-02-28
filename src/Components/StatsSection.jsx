// src/components/StatsSection.js
import React, { useState, useEffect } from "react";

const StatsSection = () => {
  // State for the counters
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [countries, setCountries] = useState(0);

  // Target values for the counters
  const targetYears = 5;
  const targetCustomers = 450;
  const targetCountries = 16;

  // Animation duration in milliseconds
  const animationDuration = 2000; // 2 seconds
  const intervalDuration = 20; // Update every 20ms

  // Function to animate the counters
  useEffect(() => {
    const incrementYears = (targetYears / animationDuration) * intervalDuration;
    const incrementCustomers =
      (targetCustomers / animationDuration) * intervalDuration;
    const incrementCountries =
      (targetCountries / animationDuration) * intervalDuration;

    const interval = setInterval(() => {
      setYears((prev) =>
        prev < targetYears ? prev + incrementYears : targetYears
      );
      setCustomers((prev) =>
        prev < targetCustomers ? prev + incrementCustomers : targetCustomers
      );
      setCountries((prev) =>
        prev < targetCountries ? prev + incrementCountries : targetCountries
      );
    }, intervalDuration);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="py-12 bg-blue-50 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Achievements
        </h2>
        <div className="flex flex-col md:flex-row justify-around gap-8">
          {/* Years */}
          <div className="text-center">
            <span className="text-5xl font-bold text-blue-600">
              {Math.round(years)}+
            </span>
            <p className="text-xl text-gray-700 mt-2">Years of Experience</p>
          </div>

          {/* Customers */}
          <div className="text-center">
            <span className="text-5xl font-bold text-green-600">
              {Math.round(customers)}+
            </span>
            <p className="text-xl text-gray-700 mt-2">Happy Customers</p>
          </div>

          {/* Countries */}
          <div className="text-center">
            <span className="text-5xl font-bold text-purple-600">
              {Math.round(countries)}+
            </span>
            <p className="text-xl text-gray-700 mt-2">
              Trusted Across Indian States{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

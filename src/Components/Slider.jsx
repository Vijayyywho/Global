import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://media.loveitopcdn.com/29911/packing-cargo-1.png",
    "https://www.gznovelpackaging.com/template/pc/skin/images/mc1.jpg",
    "https://vikingmasek.com/application/files/9014/9971/3599/MG_7859.jpg?t=1499374227310&width=675&height=450&name=_MG_7859.jpg",
    "https://i.ytimg.com/vi/xNePYj2GydM/maxresdefault.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
      <div className="overflow-hidden w-full h-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;

import React from "react";

const AgricultureProducts = () => {
  const products = [
    {
      id: 1,
      title: "Banana Bunch Cover",
      img: "https://aristoflexipack.com/media/products/644ea8cff26a2_62b922ff-3c00-44e2-a65f-ed036d24fd75.jpg",
    },
    {
      id: 2,
      title: "Grapevine Cover Films",
      img: "https://aristoflexipack.com/media/products/644c1f9245e82_gp1.jpg",
    },
    {
      id: 3,
      title: "Greenhouse Cover Films",
      img: "https://aristoflexipack.com/media/products/644c140551360_g6.JPG",
    },
    {
      id: 4,
      title: "Ground Cover Films",
      img: "https://aristoflexipack.com/media/products/644e105e2c114_3.jpg",
    },
    {
      id: 5,
      title: "HM HDPE Liner",
      img: "https://aristoflexipack.com/media/products/66934b621bcb9_IMG_1600.jpeg",
    },
    {
      id: 6,
      title: "Hydroponic Gully Film",
      img: "https://aristoflexipack.com/media/products/644e1d3891cdc_2.jpg",
    },
    {
      id: 7,
      title: "LD Liners",
      img: "https://aristoflexipack.com/media/products/644eb4ac3fe7f_2.jpg",
    },
    {
      id: 8,
      title: "LDPE Block Bottom Bags",
      img: "https://aristoflexipack.com/media/products/645a5fd786f91_8831F7AE-9FD4-4B5B-B669-9240FC181791.jpeg",
    },
    {
      id: 9,
      title: "Low Tunnel Films",
      img: "https://aristoflexipack.com/media/products/644c1a70d0c88_l4.jpg",
    },
    {
      id: 10,
      title: "Mulch Film",
      img: "https://aristoflexipack.com/media/products/644e053c9d527_m5.jpg",
    },
    {
      id: 11,
      title: "Silage Cover Film",
      img: "https://aristoflexipack.com/media/products/644e19a8d28ab_89f5f79b-f4e2-4696-b38b-f1b31a7e0356.jpg",
    },
    {
      id: 12,
      title: "Soil Disinfection Film",
      img: "https://aristoflexipack.com/media/products/644e154b37088_2.jpg",
    },
    {
      id: 13,
      title: "Water Soluble Films and Bags",
      img: "https://aristoflexipack.com/media/products/647ec25d05db9_C16092D7-E480-4EB8-88F1-4520CCBF1F83.png",
    },
    {
      id: 14,
      title: "Water Tube",
      img: "https://aristoflexipack.com/media/products/644eae8053fd1_3.jpg",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Agriculture Banner */}
      <div className="text-center mb-8 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          Agriculture & Organic Products
        </h1>
        <img
          src="https://aristoflexipack.com/media/category/645bf707bd121_agri.jpg"
          alt="Agriculture"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg border-green-500 border-4"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg"
            />
            <h2 className="text-base sm:text-lg font-semibold mt-2">
              {product.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgricultureProducts;

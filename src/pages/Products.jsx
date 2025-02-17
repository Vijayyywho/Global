import React from "react";

const Products = () => {
  // Sample product data
  const products = [
    {
      title: "Agriculture",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/agriculture.jpg",
    },
    {
      title: "Packaging for Construction",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645c904dc70b1_1.jpg",
    },
    {
      title: "Beverage Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bde6037820_beverage_new.jpg",
    },
    {
      title: "Construction Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bde6b8b041_construction.jpg",
    },
    {
      title: "Chemical Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bde7674b32_chemical.JPG",
    },
    {
      title: "E-commerce Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bde98cdfbb_ecommerce.JPG",
    },
    {
      title: "Food Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bdea2e530b_food.jpg",
    },
    {
      title: "Household Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bdead4ae38_house.jpg",
    },
    {
      title: "Hygiene Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bdebc40da5_hygiene.jpg",
    },
    {
      title: "Transport Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bdedb312d9_transport.JPG",
    },
    {
      title: "Paper Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bde87219cb_paper.jpg",
    },
    {
      title: "Plastic Packaging",
      imgUrl:
        "https://aristoflexipack.com/media/category/images/645bdee7ac5a6_plastic.jpg",
    },
  ];

  return (
    <div className="py-12 px-12 mt-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">Our Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.imgUrl}
              alt={product.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="py-4">
              <h3 className="text-xl font-medium">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

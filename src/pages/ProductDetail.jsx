import React from "react";
import { useParams } from "react-router-dom";
import productData from "../data/ProductData";
const ProductDetail = () => {
  const { productName } = useParams(); // Get product name from URL
  const product = productData[productName]; // Fetch data based on route

  if (!product) {
    return (
      <div className="py-12 px-12 mt-12 text-center">
        <h2 className="text-4xl font-semibold">Product Not Found</h2>
        <p className="mt-4 text-lg">
          The requested product does not exist. Please check the URL.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Category Banner */}
      <div className="text-center mb-8 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          {product.title}
        </h1>
        <img
          src={product.bannerImg}
          alt={product.title}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg border-green-500 border-4"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {product.products.map((item) => (
          <div key={item.id} className="text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg"
            />
            <h2 className="text-base sm:text-lg font-semibold mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;

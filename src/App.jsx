// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AgricultureProducts from "../Subpages/AgricultureProducts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Agricultureproducts" element={<AgricultureProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

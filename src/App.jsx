import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic Product Route */}
        <Route path="/products/:productName" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

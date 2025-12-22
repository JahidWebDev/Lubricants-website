import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';

import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import OurProducts from "./Component/OurProducts/OurProducts";
import PageLoader from "./Component/PageLoader";
import ContactUs from "./Component/ContactUs/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";

// Wrapper for route transition
function RouteWithLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏱ 3 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader show={loading} />
      {!loading && children}
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <RouteWithLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurProducts" element={<OurProducts />} />

          {/* Products */}
          <Route path="products/passenger-tyres" element={<OurProducts />} />
          <Route path="/products/petroleum" element={<OurProducts />} />
          <Route path="/products/lubricants" element={<OurProducts />} />
          <Route path="/products/gases" element={<OurProducts />} />
          <Route path="/products/agriculture" element={<OurProducts />} />

          {/* Explore */}
          <Route path="/aboutus/overview" element={<AboutUs/>} />
          <Route path="/explore/sustainability" element={<Home />} />
          <Route path="/explore/innovation" element={<Home />} />
          <Route path="/explore/global" element={<Home />} />
          <Route path="/explore/careers" element={<Home />} />

          {/* Contact */}
          <Route path="/contact/sales" element={<ContactUs/>} />
       
        </Routes>
      </RouteWithLoader>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

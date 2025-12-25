import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';

import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import OurProducts from "./Component/OurProducts/OurProducts";
import PageLoader from "./Component/PageLoader";
import ContactUs from "./Component/ContactUs/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import Stories from "./Component/Stories/Stories";





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
      <Routes>
        <Route
          path="/"
          element={
            <RouteWithLoader>
              <Home />
            </RouteWithLoader>
          }
        />

        <Route
          path="/OurProducts"
          element={
            <RouteWithLoader>
              <OurProducts />
            </RouteWithLoader>
          }
        />

        <Route
          path="/products/passenger-tyres"
          element={
            <RouteWithLoader>
              <OurProducts />
            </RouteWithLoader>
          }
        />

        <Route
          path="/aboutus/overview"
          element={
            <RouteWithLoader>
              <AboutUs />
            </RouteWithLoader>
          }
        />

        <Route
          path="/stories/sustainability"
          element={
            <RouteWithLoader>
              <Stories />
            </RouteWithLoader>
          }
        />

        <Route
          path="/contact/sales"
          element={
            <RouteWithLoader>
              <ContactUs />
            </RouteWithLoader>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


export default App;

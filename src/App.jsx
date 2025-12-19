import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import OurProducts from "./Component/OurProducts/OurProducts";



function App() {
  return (
    <BrowserRouter>
    
     <Routes>
  {/* Home Page */}
  <Route path="/" element={<Home />} />
  <Route path="/OurProducts" element={<OurProducts />} />

</Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;

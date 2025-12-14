import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
    
     <Routes>
  {/* Home Page */}
  <Route path="/" element={<Home />} />

</Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '..//src/components/home/Home';
import Products from '../src/components/products/Products';
import Company from '..//src/components/company/Company';
import Resources from '..//src/components/resources/Resources';
import Pricing from '..//src/components/pricing/Pricing';

function App() {
  return (
    <>
    <Router>
     <div className="flex w-full  bg-[#fff] h-[5rem] shadow-sm">
          <Navbar />
        </div>
   
    
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/*" element={<Products />} />
            <Route path="company/*" element={<Company />} />
            <Route path="resources/*" element={<Resources />} />
            <Route path="pricing/*" element={<Pricing />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;

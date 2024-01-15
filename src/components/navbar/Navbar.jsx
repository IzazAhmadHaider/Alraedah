import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

import { MdLanguage } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="w-[100%] bg-[#fff] flex justify-center items-center">
        <nav className="flex justify-between w-[80%] px-10">
          <div className="flex justify-center items-center space-x-2">
            <span>
              <button className="w-36 py-3 text-white m-auto bg-[#2a6fca] rounded-full">
                Apply now
              </button>
            </span>
            <span>
              <button className="flex  items-center justify-center space-x-3 w-36 py-3  m-auto border-[2px] text-[#2a6fca] font-medium border-[#2a6fca] rounded-full">
                <span>8001249000</span> <FaPhone />
              </button>
            </span>
            <span>
              <button className="flex  items-center justify-center space-x-3 px-5 py-3  m-auto text-[#2a6fca] font-medium ">
                <span>ع </span>
                <MdLanguage />
              </button>
            </span>
          </div>
          <div className="flex justify-center items-center space-x-3 text-[#000] font-normal text-center">
            <div className="hover:border-b-2 hover:border-b-[#376BFB] hover:font-semibold  p-2">
              <Link to="/">Home</Link>
            </div>
            <div className="hover:border-b-2 hover:border-b-[#376BFB] hover:font-semibold  p-2">
              <Link to="/products">Products</Link>
            </div>
            <div className="hover:border-b-2 hover:border-b-[#376BFB] hover:font-semibold  p-2">
              <Link to="/company">Company</Link>
            </div>
            <div className="hover:border-b-2 hover:border-b-[#376BFB] hover:font-semibold  p-2">
              <Link to="/resources">Resources</Link>
            </div>
            <div className="hover:border-b-2 hover:border-b-[#376BFB] hover:font-semibold  p-2">
              <Link to="/pricing">Pricing</Link>
            </div>
            <span><img  src="https://alraedah.sa/wp-content/uploads/2022/09/logo-1.svg" alt="" /></span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

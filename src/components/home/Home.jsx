import React from "react";
import FinanceCalculator from "./FinanceCalculator";
import { IconAsterisk, IconCheck, IconPointFilled } from "@tabler/icons-react";

function Home() {
  return (
    <>
      <div className="absolute  bg-gradient-to-r from-[#173D6F] via-[#1c406f] to-transparent  w-full h-[130vh]">
        <div className="relative flex w-full h-full">
          <div className="w-1/2 flex items-center z-40 justify-center relative rotate-[270deg] bg-contain bg-no-repeat top-[-3.90rem] -right-[4rem] bg-[url('https://alraedah.sa/wp-content/uploads/2022/09/Group-1984076814-1.png')]">
            <p className="rotate-[-270deg] text-[46px] font-bold text-white  ">
              Supporting small businesses with big Dreams <br />
              <p className="text-[25px] leading-normal font-normal">
                Your gateway for growth. Explore our innovative financial
                solutions that can scale your business for success.
              </p>
            </p>
          </div>
          <div className="w-1/2 -z-40 bg-cover bg-no-repeat bg-[url('https://alraedah.sa/wp-content/uploads/2022/09/Hero-Section-Video-1.gif')]"></div>
        </div>
        <div className="relative flex justify-center items-center -m-10">
          <FinanceCalculator />
        </div>

        <div className="flex flex-col justify-center items-center w-[90%] py-10  rounded-3xl border border-transparent bg-white shadow-2xl mt-[10rem] mx-auto my-4">
          <Banner />
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] py-10  rounded-3xl border border-transparent bg-white shadow-2xl mt-[10rem] mx-auto my-4">
          <POSFinanceProduct />
        </div>
      </div>
    </>
  );
}

export default Home;

function Banner() {
  return (
    <>
      <div className=" pl-10 w-[98%]">
        <h2 className="text-3xl font-medium">
          Whatever stage your business is in,
          <br />
          Alraedah can take you from ambition to achievement
        </h2>
        <div className="mr-16 text-xl font-semibold">
          <div className="flex justify-between">
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2 my-8 ">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/store_major-1.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Opening a New Branch</h6>
            </div>
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2 my-8  ">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/Frame-1984076883-1.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Purchasing Equipment</h6>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/ios-settings.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Improving Operations</h6>
            </div>
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2 ">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/Frame-12098-1.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Expanding Products & Services</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function POSFinanceProduct() {
  return (
    <>
    <div className="flex  px-10">
      <div className="w-[95%] flex flex-col space-y-6">
        <div className="flex space-x-3 w-[30vw] py-2 bg-blue-200">
          <span>
            <img
              src="https://alraedah.sa/wp-content/uploads/2022/12/store_major-1.svg"
              alt=""
            />
          </span>
          <p>POS Finance Product</p>
        </div>
        <p className="text-4xl font-medium">Your sales pay your finance</p>
        <p>A flexible financial solution that enables direct repayment through your POS sales. Simple, straightforward and seamless:</p>
        <div className="leading-loose">
          <h1  className="text-lg font-semibold">Benefits:</h1>
          <span className="flex items-center space-x-4"><IconCheck color="green"/><p>Financing from SAR 100,000 – 7.5 million</p></span>
          <span className="flex items-center space-x-4"><IconCheck color="green"/><p>Provide POS Machines</p></span>
          <span className="flex items-center space-x-4"><IconCheck color="green"/><p>7 days to get Financed</p></span>
          <span className="flex items-center space-x-4"><IconCheck color="green"/><p>Personal Relationship Manager Appointed to Your Account</p></span>
        </div>
        <div className="leading-loose">
          <h1  className="text-lg font-semibold">Requirnements:</h1>
          <span className="flex items-center space-x-4"><IconPointFilled color="black"/><p>Operational for a period of at least 6 months</p></span>
          <span className="flex items-center space-x-4"><IconPointFilled color="black"/><p>No Guarantor Needed</p></span>
          <span className="flex items-center space-x-4"><IconPointFilled color="black"/><p>No financial statements required</p></span>
          <span className="ml-10 text-gray-400">* exceptions may apply</span>
        </div>
        <div><button className="border-2  border-[#2a6fca] text-[#2a6fca] m-2 px-4 py-2 rounded-full">Learn more</button></div>
      </div>
      <div className="mt-16 "><img src="https://alraedah.sa/wp-content/uploads/2023/01/MCA-illustration.png" alt="" /></div>
      </div>
    </>
  );
}

import React from "react";

function FinanceCalculator() {
  return (
    <div className="w-[65%] bg-white flex flex-col justify-center items-start px-10 rounded-3xl pb-10 space-y-5 py-5 shadow-2xl ">
      <div className="flex space-x-4 mt-2">
        <img
          src="https://alraedah.sa/wp-content/uploads/2022/12/Group-11972.svg"
          alt=""
        />{" "}
        <p className="font-semibold text-2xl">Calculate your finance</p>
      </div>
      <p className="font-normal text-xl">
        What is the average monthly POS sales?
      </p>
      <div className="flex justify-between w-full mt-2 ">
        <div class="relative border-2 w-full mr-10 px-2 py-1 border-gray-300 rounded-md">
          <input
            type="number"
            placeholder="Enter Amount*"
            class="appearance-none outline-none border-none w-full py-2 px-4 leading-tight focus:outline-none"
            name=""
            id=""
          />
          <span class="absolute inset-y-0 right-0 pr-4 flex items-center text-base font-semibold">
            SAR
          </span>
        </div>

        <div>
          <button className="text-[#2a6fca] border-2 border-[#2a6fca] rounded-full py-3 px-5 items-center ">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinanceCalculator;

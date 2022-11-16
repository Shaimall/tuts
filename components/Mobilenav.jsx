import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Mobilenav() {
  return (
    <div className="block md:hidden">
      <button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu className="block md:hidden h-6 w-6" />
      </button>
      <div className="p-6 w-1/2 h-screen bg-gradient-to-tr from-orange-500 to-red-300 z-20 fixed top-0 -right-96  peer-focus:right-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-xl text-center cursor-pointer font-bold text-orange-50 border-b border-gray-100 pb-4">
            Menu
          </h1>
          <div className=" my-4 border-b border-gray-100 pb-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-tr from-orange-400 to-red-500 rounded-xl p-2  m-auto">
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Pricing
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-tr from-orange-400 to-red-500 rounded-xl   p-2  m-auto">
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Product
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-tr from-orange-400 to-red-500 rounded-xl   p-2  m-auto">
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                About Us
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-tr from-orange-400 to-red-500 rounded-xl   p-2  m-auto">
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Careers
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-tr from-orange-400 to-red-500 rounded-xl   p-2  m-auto">
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Community
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-tr from-orange-400 to-red-500 rounded-xl   p-2  ">
              <button className="text-base text-gray-800 bg-orange-600 px-4 py-2 rounded-lg group-hover:text-white font-semibold ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilenav;

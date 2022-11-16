import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between mx-auto space-y-8 md:flex-row  px-6 py-10  md:space-y-0">
          <div className="flex flex-col-reverse items-center md:items-start justify-between space-y-12 md:flex-col md:space-y-0 ">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>

            <div>
              <img src="img/logo-white.svg" className="h-8" alt="" />
            </div>

            <div className="flex justify-center space-x-4">
              <a href="#">
                <AiOutlineInstagram className="text-5xl text-white hover:scale-125 hover:bg-gradient-to-tr from-yellow-400 to-red-500 rounded-lg" />
              </a>

              <a href="#">
                <AiFillYoutube className="text-5xl text-white  hover:scale-125 hover:bg-gradient-to-tr from-red-400 to-white rounded-lg" />
              </a>

              <a href="#">
                <AiFillTwitterCircle className="text-5xl text-white  hover:scale-125 hover:bg-gradient-to-tr from-blue-500 to-white rounded-lg" />
              </a>

              <a href="#">
                <BsPinterest className="text-5xl text-white  hover:scale-125 hover:bg-gradient-to-tr from-red-400 to-orange-500 rounded-lg" />
              </a>

              <a href="#">
                <AiOutlineInstagram className="text-5xl text-white  hover:scale-125 hover:bg-gradient-to-tr from-yellow-400 to-red-500 rounded-lg" />
              </a>
            </div>
          </div>

          <div className="flex justify-around space-x-10">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-4">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Ask us a Question"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

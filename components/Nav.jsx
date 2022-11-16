import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="">
            <img src="img/logo.svg" alt="" />
          </div>

          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:underline decoration-1  font-semibold">
              Pricing
            </a>
            <a href="#" className="hover:underline decoration-1  font-semibold">
              Product
            </a>
            <a href="#" className="hover:underline decoration-1  font-semibold">
              About Us
            </a>
            <a href="#" className="hover:underline decoration-1  font-semibold">
              Careers
            </a>
            <a href="#" className="hover:underline decoration-1  font-semibold">
              Community
            </a>
          </div>

          <a
            href="#"
            className="hidden p-3  animate-bounce px-6 pt-2 text-white bg-gradient-to-r from-purple-700 to bg-red-500 rounded-full  hover:bg-brightRedLight hover:text-2xl md:block"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

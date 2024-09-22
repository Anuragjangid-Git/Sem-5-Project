import React from "react";
import {
  FaYoutube,
  FaFacebookMessenger,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white h-[330px] flex mt-2 ">
        <div className="h-[290px] w-[210px] p-10 ml-20 mt-10">
          <h1 className="text-xl font-semibold p-1 ">shop</h1>
          <p className="text-base font-normal hover:underline cursor-pointer p-1">
            Rent
          </p>
          <p className="text-base font-normal hover:underline  cursor-pointer p-1 ">
            All products
          </p>
        </div>
        <div className="h-[290px] w-[210px] p-6 ml-20 mt-10 ">
          <h1 className="text-xl font-semibold p-1 "> About us</h1>
          <p className="text-base font-normal hover:underline cursor-pointer p-1 ">
            About us
          </p>
          <p className="text-base font-normal hover:underline  cursor-pointer p-1 ">
            Contact with us
          </p>
          <p className="text-base font-normal hover:underline  cursor-pointer p-1 ">
            Privacy Policy
          </p>
          <p className="text-base font-normal hover:underline  cursor-pointer p-1 ">
            Terms & Condition
          </p>
        </div>
        <div className="h-[290px] w-[210px] p-6 ml-20 mt-10">
          <h1 className="text-xl font-semibold p-1 ">Share</h1>
          <div className="flex gap-2">
            <FaYoutube size={25} />
            <FaFacebookMessenger size={25} />
            <AiFillInstagram size={25} />
            <FaTwitter size={25} />
          </div>
        </div>
        <div className="h-[290px] w-[550px]  ml-20 mt-10">
          <h1 className="text-xl font-semibold p-1 ">Subscribe</h1>
          <p className="text-base font-normal  p-1 ">
            Subscribe to PedalLink and stay in the loop with the latest trends,
            news, and updates from the world of cycling.
          </p>
          <div className="flex items-center border mt-3 ">
            <input
              type="email"
              placeholder="Enter your email... "
              className="p-3  bg-black text-white w-[100%] outline-none h-[46px]"
            />
            <FaAngleRight  color="black" className="bg-[#BEDAE5] h-[46px] w-[46px] p-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

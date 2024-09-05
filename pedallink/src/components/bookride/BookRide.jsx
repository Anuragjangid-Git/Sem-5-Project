import React from "react";
import "./BookRide.css";
import { GoDotFill } from "react-icons/go";
import { FaSquareFull } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
const BookRide = () => {
   
  return (
    <div className="serach  p-2 md:p-5 border rounded-xl shadow-md ">
      <div>
        <h1 className="font-bold text-3xl ">Book Your Ride</h1>
      </div>
      <div className="flex  flex-col gap-3 mt-[10px] ">
        <div className="h-[44px] w-[348px] bg-slate-100 p-[10px] rounded-lg flex items-center gap-2  ">
          <GoDotFill size={13} />
          <input
          
            type="text"
            placeholder="Pickup Location"
            className="bg-slate-100  outline-none w-full"
          />
          <FaLocationArrow size={20} />
        </div>
        <div className="h-[44px] w-[348px] bg-slate-100 p-[10px] rounded-lg flex items-center gap-2 ">
        <FaSquareFull size={6} />
          <input
            type="text"
            placeholder="Dropoff Location"
            className="bg-slate-100  outline-none w-full"
          />
        </div>

        <div className=" w-[105px]  p-2 bg-black text-white rounded-lg justify-center items-center flex ">
            <button>See prices</button>
        </div>
      </div>
    </div>
  );
};

export default BookRide;

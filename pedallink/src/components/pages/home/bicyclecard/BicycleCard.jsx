import React from "react";
import './BicycleCard.css'
const BicycleCard = ({bike_img,bike_name}) => {
  return (
    <div >
      <div className=" flex  w-[90%] justify-center items-center mx-[50px]">
        <div
          className="content  w-[90%] m-[15px] box-border float-left text-center rounded-2xl cursor-pointer pt-[10px] ease-in
          pb-[20px] "
          
        >
          <img
            src={bike_img}
            alt="Bicycle"
            className="bi-img"
          />
          <h3 className="text-center text-lg pt-3 font-semibold">{bike_name}</h3>
          <h6 className="text-center text-xl text-blue-950">₹899 / Hour</h6>
           <p className="text-center pt-[0 8px]">
            HORNBACK X1 Full Size Foldable Electric Cycle </p> 
          <button className="btn px-8 py-3 border-slate-400 border rounded-3xl mt-3 ">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;

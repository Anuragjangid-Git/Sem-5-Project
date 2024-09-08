import React from "react";

const HomeContent = () => {
  return (
    <div className="flex  ">
      <div className=" h-[400px] w-[60%] ">
        <h1 className="text-[80px] leading-none font-bold px-[60px]">
          Feel the pleasure on bike
        </h1>
        <p className="font-normal text-base mt-3 px-[60px] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          magni adipisci velit placeat esse minus, atque eum nihil numquam
          expedita aperiam dolorem, doloremque voluptate nulla. Eius dolor
          perspiciatis exercitationem harum?
        </p>
      </div>
      <div className=" h-[400px] w-[50%] flex ">
        <div className="flex-col ">
          <div className=" p-5 flex flex-col items-center  ">
            <img
              src="https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/Bike-and-Bicycle_31.png"
              alt="Bicycle"
              className="w-[30%]"
            />
            <p className="font-semibold text-xl p-3">Ride Anywhere</p>
            
          </div>
          <div className=" p-5 flex flex-col items-center ">
            <img
              src="https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/Bike-and-Bicycle_23.png"
              alt="park_Station"
              className="w-[30%]"
            />
            <p className="font-semibold text-xl p-3">Park Stations</p>
            
          </div>
        </div>
        <div className="flex-col">
          <div className=" p-5 flex flex-col items-center">
            <img
              src="https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/Bike-and-Bicycle_47.png"
              alt="Easy_process"
              className="w-[30%]"
            />
            <p className="font-semibold text-xl p-3">Easy Process</p>
            
          </div>
          <div className=" p-5 flex flex-col items-center ">
            <img
              src="https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/Bike-and-Bicycle_25.png"
              alt=""
              className="w-[30%]"
            />
            <p className="font-semibold text-xl p-3">Safe Riding</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

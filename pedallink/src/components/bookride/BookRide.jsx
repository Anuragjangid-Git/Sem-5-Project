import React, { useState, useMemo } from "react";
import { GoDotFill } from "react-icons/go";
import { FaSquareFull } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { bookride, getCurrentUser } from "../../Firebase/FireStore";
const BookRide = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [currentUser,setCurrentUser]= useState({});
  useMemo(()=>{
     getCurrentUser(setCurrentUser);
  },[])
  const user = currentUser.userId;
      const rideData = {
        pickupLocation,
        dropoffLocation,
        user,
        timestamp: new Date(),
      };
  const handleSaveRide = async () => {
    try {
      if (!user) {
        console.log("No user is signed in.");
        return;
      }
      await bookride(rideData);
      setDropoffLocation("");
      setPickupLocation("");
      console.log("Ride details saved successfully!");
  
    } catch (error) {
      console.error("Error saving ride details:", error);
    }
  };
  
  return (
    <div className="serach p-2 md:p-5 border rounded-xl shadow-md h-[250px] mt-10">
      <div>
        <h1 className="font-bold text-3xl">Book Your Ride</h1>
      </div>
      <div className="flex flex-col gap-3 mt-[10px]">
        <div className="h-[44px] w-[348px] bg-slate-100 p-[10px] rounded-lg flex items-center gap-2">
          <GoDotFill size={13} />
          <input
            type="text"
            placeholder="Pickup Location"
            className="bg-slate-100 outline-none w-full"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
          <FaLocationArrow size={20} />
        </div>
        <div className="h-[44px] w-[348px] bg-slate-100 p-[10px] rounded-lg flex items-center gap-2">
          <FaSquareFull size={6} />
          <input
            type="text"
            placeholder="Dropoff Location"
            className="bg-slate-100 outline-none w-full"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
          />
        </div>

        <div className="w-[105px] p-2 bg-black text-white rounded-lg justify-center items-center flex">
          <button onClick={handleSaveRide}>Book ride</button>
        </div>
      </div>
    </div>
  );
};

export default BookRide;

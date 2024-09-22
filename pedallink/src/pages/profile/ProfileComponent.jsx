import React from "react";

const ProfileComponent = () => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-semibold ">Account</h1>
      <div className="flex gap-40 mt-10">
        <div>
          <h1 className="text-2xl font-medium  ">Account details</h1>
          <p>Anurag Jangid</p>
          <p>India</p>
        </div>
        <div>
          <h1 className="text-2xl font-medium  ">Ride History</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;

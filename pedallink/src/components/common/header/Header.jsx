import React from "react";
import image from "../../data/pedalLink-logo.png";
import "./header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/FirebaseConfig";
const Header = () => {
  const handleSignOut = ()=>{
    signOut(auth).then(()=>console.log("Sign Out")).catch((error)=>console.log(error));
  }
  return (
    <div className="">
    <div className="main border shadow-md bg-white ">
      <div className="logo-text">
        <img src={image} alt="LOGO" className="logo" />
        <h4>PedalLink</h4>
      </div>

      <div className="ride-about">
        <p className="rtext">Ride</p>
        <div className="about">
          <p className="rtext">About</p>
          <RiArrowDropDownLine size={25} />
        </div>
      </div>

      <div className="dropdown left-[50%]">
      <div className="dropbtn" >
        <p className="font-medium ">Profile</p>
        <RiArrowDropDownLine  size={25}  />
      </div>
      <div className="dropdown-content font-medium">
        <a href="#">My profile</a>
        <a onClick={handleSignOut}  href="#">Sign out</a>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Header;


import React from "react";
import image from "../../data/pedalLink-logo.png";
import "./header.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="main border shadow-md  ">
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

      <div className="profile-icon" >
        <p>Profile</p>
        <RiArrowDropDownLine  size={25}  />
      </div>
    </div>
  );
};

export default Header;

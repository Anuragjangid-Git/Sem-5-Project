import React from "react";
import image from "../../data/pedalLink-logo.png";
import "./header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/FirebaseConfig";
import { MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out");
        navigate("/"); // Navigate to register page after sign out
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="main border shadow-md bg-white ">
        <div onClick={(e)=>{navigate("/home")}} className="logo-text">
          <img src={image} alt="LOGO" className="logo" />
          <h4>PedalLink</h4>
        </div>

        <div className="ride-about">
          <p className="rtext">Ride</p>
          <div className="about cursor-pointer">
            <p className="rtext">About</p>
            <RiArrowDropDownLine size={25} />
          </div>
        </div>

        <div className="dropdown left-[50%]">
          <div className="dropbtn mt-1 items-center cursor-pointer ">
            <MdPerson size={38} />
            <RiArrowDropDownLine size={30} />
          </div>
          <div className="dropdown-content font-medium">
            <a  onClick={(e)=>{navigate("/profile")}} href="#">My profile</a>
            <a onClick={handleSignOut} href="#">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

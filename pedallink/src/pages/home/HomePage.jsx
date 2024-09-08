import React from "react";
import "./HomePage.css";
import Header from '../../components/common/header/Header'
import BookRide from '../../components/bookride/BookRide'
import GoogleMapSection from '../../components/googlemapsection/GoogleMapSection'
import HomeContent from '../home/homePage_content/HomeContent'
import BicycleCard from '../home/bicyclecard/BicycleCard' 
const HomePage = () => {
  return (
    <div>
      <div className="fixed w-[100%] z-10">
      <Header />
      </div>
      <div className="home ">
        <BookRide />
        <GoogleMapSection />
      </div>
      <div className="">
        <HomeContent/>
      </div>
      <div className=" flex flex-wrap gap-[20px] justify-center items-center border-y ">
        <BicycleCard
          bike_img={
            "https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/bike1.jpg"
          }
          bike_name={"Speedliner X-45"}
        />
        <BicycleCard
          bike_img={
            "https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/bike3.jpg"
          }
          bike_name={"Paragon Neo 5"}
        />
        <BicycleCard
          bike_img={
            "https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/bike6.jpg"
          }
          bike_name={"Raven Cleo v2"}
        />
        
      </div>
    </div>
  );
};

export default HomePage;

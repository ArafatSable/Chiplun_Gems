import React, { useState, useEffect } from "react";
import bannerImage from "../images/banner.JPG";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentTour from "./subComponents/contentTour";
import ContentProduct from "./subComponents/contentProduct";
import ContentHotels from "./subComponents/contentHotels";
import ContentHospital from "./subComponents/contentHospital";
const Home = () => {
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;

      // Adjust the threshold value as needed
      const threshold = 1.3;

      // Calculate the position where the content should be displayed
      const contentPosition = document.querySelector(".content-tour").offsetTop;

      setShowContent(scrollPosition >= contentPosition * threshold);


    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="chip_infos" style={{ position: "relative" }}>
        <div className="fade-in">
          <img
            src={bannerImage}
            alt="Banner"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
            className="image-edit"
          />
        </div>
        <h1 className="text-center animated-heading">
          One Place to<br />
          Enjoy Chiplun.
        </h1>
        <p className="para-text">
          Here you can see the Information  about Chiplun,<br />
           a small town in Maharashtra with beautiful scenery and rich culture.
        </p>
      </div>
      {/* <ContentProduct showContent={showContent} /> */}
      <ContentTour showContent={showContent} />
      <ContentHotels showContent={showContent} />
      <ContentHospital showContent={showContent} />

      <footer></footer>
    </>
  );
};

export default Home;
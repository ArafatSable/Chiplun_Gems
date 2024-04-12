import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HospitalDetails from "./components/subComponents/hospitalDetails";
import HotelDetails from "./components/subComponents/hotelDetails";
import TourDetails from "./components/subComponents/tourDetails";
import Errorpage from "./components/Errorpage";
import "./App.css";

const App = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [footerPosition, setFooterPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const footerElement = document.querySelector(".footer-container");
      const footerHeight = footerElement.offsetHeight;
      const footerTopPosition = footerElement.offsetTop;
      const maxLineWidth = footerTopPosition - windowHeight;
      const newLineWidth = Math.min(maxLineWidth, scrollPosition);
      setLineWidth(newLineWidth);
      setFooterPosition(footerTopPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="div-content" style={{ paddingTop: "93px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/touristplaces/:name" element={<TourDetails />} />
            <Route path="/restaurants/:name" element={<HotelDetails />} />
            <Route path="/hospital/:name" element={<HospitalDetails />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
          <div className="scroll-line" style={{ width: `${lineWidth}px` }}></div>
          <div className="above-footer"></div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />    
      </div>
    </>
  );
};

export default App;

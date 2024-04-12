import React from "react";
import "./About.css";
import deve from "../images/deve.png"

const About = ()=>{
    return(
        <>
        
<div className="about-section">
  <h1>About M&A Groups</h1>
  <p>We are a group of students who have come together <br /> to create this website for the purpose of learning <br /> and sharing our knowledge with others in
  the field of web development.<br/> We hope you enjoy your visit here!</p>
</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row">
<div className="column">
  <div className="card">
    <img src={deve} alt="Jane" style={{ width: "100%", margin: "auto", display: "block"  }} />
    <div className="container">
      <h2>Arafat Sable</h2>
      <p className="title">Junior Level Web developer</p>
      <p>Currently Studying Computer Science Engineering at Nirma University, Ahmedabad.</p>
      <p>arafatsable409@gmail.com</p>
      <p><button className="button">Contact</button></p>
    </div>
  </div>
</div>
 
</div>

        </>
    )
}
export default About;
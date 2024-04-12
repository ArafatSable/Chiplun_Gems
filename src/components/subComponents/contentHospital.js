import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContentHospital = ({ showContent }) => {
  const [hospital, setHospital] = useState([]);
  const [showAllHospitals, setShowAllHospitals] = useState(false);

  useEffect(() => {
    // Simulate fetching data from server
    async function fetchData() {
      // Replace this with your actual data source, in this case, the hospitals array
      setHospital(hospitals);
    }
    fetchData();
  }, []);

  const hospitals = [
  
    {
      name: "Life Care Hospital",
      location: "Bypass Road, Chiplun, Maharashtra",
      contactNumber: "+91-2355-252525",
      specialties: ["General Medicine", "Surgery", "Obstetrics and Gynecology"],
      rating: 4.5,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688046309/chiplun/lifecarehos_ocywa4.jpg"],
      description: ["Life Care Hospital is a well-established healthcare facility offering comprehensive medical services including general medicine, surgery, and obstetrics and gynecology."]
    },
    {
      name: "Kamath Hospital",
      location: "Ratnagiri Road, Chiplun, Maharashtra",
      contactNumber: "+91-2355-250650",
      specialties: ["Orthopedics", "Pediatrics", "Dermatology"],
      rating: 4.0,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688046415/chiplun/kamathhos_lfutdw.jpg"],
      description: ["Kamath Hospital is a reputed healthcare institution known for its expertise in orthopedics, pediatrics, and dermatology."]
    },
    {
      name: "Swami Vivekananda Rugnalaya",
      location: "Mumbai-Goa Highway, Near Dabhole Bridge, Chiplun, Maharashtra",
      contactNumber: "+91-2355-252766",
      specialties: ["Ophthalmology", "ENT", "Dentistry"],
      rating: 4.2,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688046706/chiplun/swami_aggg4z.jpg"],
      description: ["Swami Vivekananda Rugnalaya is a well-equipped hospital offering specialized services in ophthalmology, ENT, and dentistry."]
    },
    {
      name: "Padmashree Hospital",
      location: "Ratnagiri Road, Near Saikrupa Lodge, Chiplun, Maharashtra",
      contactNumber: "+91-2355-250003",
      specialties: ["Cardiology", "Neurology", "Dermatology"],
      rating: 4.8,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688046549/chiplun/padma_eaqpt5.jpg"],
      description: ["Padmashree Hospital is a leading healthcare institution specializing in advanced cardiology, neurology, and dermatology treatments."]
    },
    {
      name: "SMS Hospital",
      location: "Javali Ali, Chiplun, Maharashtra",
      contactNumber: "+91-2355-250999",
      specialties: ["General Surgery", "Gastroenterology", "Urology"],
      rating: 4.3,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1687957480/chiplun/smshospital_ef8vdi.jpg"],
      description: ["SMS Hospital offers a wide range of surgical specialties including general surgery, gastroenterology, and urology."]
    }
    // ... rest of the hospitals data
  ];

  const displayedHospitals = showAllHospitals ? hospitals : hospitals.slice(0, 3);

  const handleReadMore = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setShowAllHospitals(true);
  };

  const handleReadLess = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setShowAllHospitals(false);
  };

  return (
    <div className={`content-hospital ${showContent ? "show" : ""}`}>
      <h1>Hospital and Medical Emergency of Chiplun</h1>
      <div className="content-hospitals">
        <div className="rest-cards">
          {displayedHospitals.map((hos) => (
            <div className="cards-own" key={hos.name}>
              <div className="card-image-container">
                <img className="card-image" src={hos.images[0]} alt={hos.name} />
              </div>
              <div className="card-content">
                <Link to={`/hospital/${hos.name}`}>
                  <button className="dog-card-button">
                    <h2>{hos.name}</h2>
                  </button>
                </Link>
                <div className="card-details">
                  <p>
                    <span className="specialties">Specialities:</span>{" "}
                    {hos.specialties.join(", ")}
                  </p>
                  <p>
                    <span className="contact">Contact Number:</span>{" "}
                    {hos.contactNumber}
                  </p>
                  <div className="card-rating">
                    <span className="rating-label">Rating:</span>{" "}
                    <span className="rating">{hos.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showAllHospitals ? (
            <div className="read-more" onClick={handleReadLess}>
              <a href="#" onClick={handleReadLess}>
                &lt; Read Less
              </a>
            </div>
          ) : (
            <div className="read-more" onClick={handleReadMore}>
              <a href="#" onClick={handleReadMore}>
                &gt; Read More
              </a>
            </div>
          )}
          <p className="para-text">
            Chiplun is also renowned for its delicious Alphonso mangoes and
            kokum syrup. Adventure enthusiasts can indulge in activities like
            river rafting and trekking in the surrounding hills. The annual
            Chiplun Vardotsav showcases the rich cultural heritage of the
            region. The town has a thriving economy based on agriculture,
            fishing, and small-scale industries. With its natural beauty and
            cultural significance, Chiplun offers a delightful experience to
            visitors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentHospital;

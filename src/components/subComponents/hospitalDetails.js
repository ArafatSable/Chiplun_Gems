import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
const TourDetails = () => {
  const [tour, setTour] = useState({});
  const { name } = useParams();

  useEffect(() => {
    // Simulating API data
    const touristplaces =
[ {
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
}]
    // Find the matching tour by name
    const matchingTour = touristplaces.find((tour) => tour.name === name);

    if (matchingTour) {
      setTour(matchingTour);
    } else {
      setTour({});
    }
  }, [name]);

  const renderRatingStars = () => {
    const rating = tour.rating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="fa fa-star" aria-hidden="true"></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fa fa-star-half" aria-hidden="true"></i>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa fa-star-o" aria-hidden="true"></i>
      );
    }

    return stars;
  };

  return (
    <>
      <div className="tour-heading">
        <h1 className="tour-heading-text">Tourist Places to Visit In Chiplun</h1>
      </div>

      <div id="container">
        <div className="product-details">
          <h1>{tour.name}</h1>
          <span className="hint-star star">{renderRatingStars()}</span>

          {tour.description && (
            <p className="information">{tour.description[0]}</p>
          )}
        </div>

        <div className="product-image">
          <img src={tour.images} alt={tour.name} />

          <div className="info">
            <h2>Description</h2>
            <ul>
              <li>
                <strong>Tags:</strong>{" "}
                {tour.tags ? tour.tags.join(", ") : ""}
              </li>
              <li>
                <strong>Location:</strong> {tour.location}
              </li>
              <li>
                <strong>Rating:</strong> {tour.rating}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="desc">
        {tour.description && (
          <div className="description-section">
            <h1 className="description-heading">Description of Place:</h1>
            <p>{tour.description[0]}</p>
            {tour.description.length > 1 && <p>{tour.description[1]}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default TourDetails;

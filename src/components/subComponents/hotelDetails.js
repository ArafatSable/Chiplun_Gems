import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HotelDetails = () => {
  const [hotel, setTour] = useState({});
  const { name } = useParams();

  useEffect(() => {

    

    const touristplaces = [
      {
        name: "Hotel Abhishek",
        location: "Ratnagiri Road, Chiplun, Maharashtra",
        contactNumber: "+91-2355-252222",
        cuisine: ["Indian", "Chinese", "Seafood"],
        rating: 4.5,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049032/chiplun/hotel-abhishek_f8krmi.jpg"],
        description: ["Hotel Abhishek is a popular restaurant offering a diverse range of Indian, Chinese, and seafood dishes."]
      },
      {
        name: "Hotel Samrat",
        location: "Mumbai-Goa Highway, Chiplun, Maharashtra",
        contactNumber: "+91-2355-252727",
        cuisine: ["Indian", "Malvani", "Chinese"],
        rating: 4.2,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049032/chiplun/Hotel_Samrat_afmnum.jpg"],
        description: ["Hotel Samrat is known for its delicious Indian, Malvani, and Chinese cuisines, offering a delightful dining experience."]
      },
      {
        name: "Hotel Saffron",
        location: "Near Chiplun Bus Stand, Chiplun, Maharashtra",
        contactNumber: "+91-2355-253535",
        cuisine: ["Indian", "Continental", "Chinese"],
        rating: 4.0,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049032/chiplun/saffron_tlqyez.jpg"],
        description: ["Hotel Saffron is a popular restaurant offering a mix of Indian, Continental, and Chinese cuisines in a comfortable setting."]
      },
      {
        name: "Hotel Annapurna",
        location: "Ratnagiri Road, Chiplun, Maharashtra",
        contactNumber: "+91-2355-253333",
        cuisine: ["Indian", "Malvani", "Tandoori"],
        rating: 4.2,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049031/chiplun/hotel-annapurna_ndz1uj.jpg"],
        description: ["Hotel Annapurna offers a wide range of Indian, Malvani, and Tandoori delicacies, serving flavorsome dishes to its patrons."]
      },
      {
        name: "Kokani Katta",
        location: "Ratnagiri Road, Chiplun, Maharashtra",
        contactNumber: "+91-2355-250040",
        cuisine: ["Malvani", "Seafood"],
        rating: 4.4,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049379/chiplun/hotel-kokani-katta-family-restaurent-sangli-1zwnfbxld0_vuny7g.jpg"],
        description: ["Kokani Katta specializes in Malvani cuisine and offers an array of delectable seafood dishes, providing an authentic coastal dining experience."]
      },
      {
        name: "Hotel Shree Krishna",
        location: "Near ST Stand, Chiplun, Maharashtra",
        contactNumber: "+91-2355-250141",
        cuisine: ["Indian", "Chinese"],
        rating: 4.1,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049031/chiplun/red5-facade-Hotel-Shri-Krishna-Bhojane_qfrrww.jpg"],
        description: ["Hotel Shree Krishna is known for its Indian and Chinese cuisines, offering a wide variety of dishes in a pleasant ambience."]
      },
      {
        name: "Hotel Sagar Darshan",
        location: "Ratnagiri Road, Chiplun, Maharashtra",
        contactNumber: "+91-2355-252500",
        cuisine: ["Malvani", "Seafood"],
        rating: 4.3,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049031/chiplun/sagar-darshan-somnath_sq9uqz.jpg"],
        description: ["Hotel Sagar Darshan specializes in Malvani cuisine and serves a delectable variety of seafood dishes, capturing the flavors of the coastal region."]
      },
      {
        name: "Hotel Amar",
        location: "Ratnagiri Road, Chiplun, Maharashtra",
        contactNumber: "+91-2355-251177",
        cuisine: ["Indian", "Chinese"],
        rating: 4.0,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049031/chiplun/amraban-resort_lepuhy.jpg"],
        description: ["Hotel Amar offers a diverse menu of Indian and Chinese dishes, ensuring a delightful dining experience for its customers."]
      },
      {
        name: "Hotel Nisarga",
        location: "Mumbai-Goa Highway, Chiplun, Maharashtra",
        contactNumber: "+91-2355-250094",
        cuisine: ["Indian", "Chinese", "Continental"],
        rating: 4.2,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049515/chiplun/nisarga_d6p5zk.jpg"],
        description: ["Hotel Nisarga is known for its wide range of Indian, Chinese, and Continental dishes, offering a diverse culinary experience to its guests."]
      },
      {
        name: "Hotel Shrikunj",
        location: "Near ST Stand, Chiplun, Maharashtra",
        contactNumber: "+91-2355-253355",
        cuisine: ["Indian", "Chinese"],
        rating: 4.1,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049031/chiplun/hotel-shri-kunj_ur4rrs.jpg"],
        description: ["Hotel Shrikunj serves a variety of Indian and Chinese dishes, known for their flavors and quality, ensuring a satisfying meal for the diners."]
      },
      {
        name: "Hotel Shree Ganesh",
        location: "Near Ganpati Mandir, Chiplun, Maharashtra",
        contactNumber: "+91-2355-252333",
        cuisine: ["Indian", "Malvani", "Chinese"],
        rating: 4.3,
        images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688049592/chiplun/shri-ganesh-hotel_yem6uv.jpg"],
        description: ["Hotel Shree Ganesh offers a diverse menu featuring Indian, Malvani, and Chinese cuisines, providing a delightful culinary experience."]
      }   
    ];

    const matchingTour = touristplaces.find((tour) => tour.name === name);

    if (matchingTour) {
      setTour(matchingTour);
    } else {
      setTour({});
    }
  }, [name]);

  const renderRatingStars = () => {
    const rating = hotel.rating;
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
        <h1 className="tour-heading-text">Best Restuarants In Chiplun</h1>
      </div>

      <div id="container">
        <div className="product-details">
          <h1>{hotel.name}</h1>
          <span className="hint-star star">{renderRatingStars()}</span>

          {hotel.description && (
            <p className="information">{hotel.description[0]}</p>
          )}
        </div>

        <div className="product-image">
          <img src={hotel.images} alt={hotel.name} />

          <div className="info">
            <h2>Description</h2>
            <ul>
              <li>
                <strong>Cuisines:</strong>{" "}
                {hotel.cuisine ? hotel.cuisine.join(", ") : ""}
              </li>
              <li>
                <strong>Location:</strong> {hotel.location}
              </li>
              <li>
                <strong>Rating:</strong> {hotel.rating}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="desc">
        {hotel.description && (
          <div className="description-section">
            <h1 className="description-heading">Description of Place:</h1>
            <p>{hotel.description[0]}</p>
            {hotel.description.length > 1 && <p>{hotel.description[1]}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default HotelDetails;

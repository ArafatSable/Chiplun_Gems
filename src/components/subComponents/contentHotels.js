import React, { useState } from "react";
import { Link } from "react-router-dom";

const restaurants = [
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

const ContentHotels = ({ showContent }) => {
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);

  const displayedRestaurants = showAllRestaurants ? restaurants : restaurants.slice(0, 3);

  const handleReadMore = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setShowAllRestaurants(true);
  };

  const handleReadLess = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setShowAllRestaurants(false);
  };

  return (
    <div className={`content-hotels ${showContent ? "show" : ""}`}>
      <h1>Top 3 Restaurants to Eat in Chiplun</h1>
      <div className="content-tourist">
        <div className="rest-cards">
          {displayedRestaurants.map((restaurant) => (
            <div className="cards-own" key={restaurant.name}>
              <div className="card-image-container">
                <img className="card-image" src={restaurant.images[0]} alt={restaurant.name} />
              </div>
              <div className="card-content">
                <Link to={`/restaurants/${restaurant.name}`}>
                  <button className="dog-card-button">
                    <h2>{restaurant.name}</h2>
                  </button>
                </Link>
                <div className="card-details">
                  <p>
                    <span className="specialties">Cuisines:</span>{" "}
                    {restaurant.cuisine ? restaurant.cuisine.join(", ") : ""}
                  </p>
                  <p>
                    <span className="contact">Contact Number:</span>{" "}
                    {restaurant.contactNumber}
                  </p>
                  <div className="card-rating">
                    <span className="rating-label">Rating:</span>{" "}
                    <span className="rating">{restaurant.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showAllRestaurants ? (
            <div className="read-more" onClick={handleReadLess}>
              <a href="#" onClick={handleReadLess}>&lt; Read Less</a>
            </div>
          ) : (
            <div className="read-more" onClick={handleReadMore}>
              <a href="#" onClick={handleReadMore}>&gt; Read More</a>
            </div>
          )}
          <p className="para-text">
            The Parshuram Temple, Gowalkot Fort, and Nehru Smriti Udhyan are notable attractions. The region is famous for the Konkan Railway route, which passes through picturesque landscapes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentHotels;


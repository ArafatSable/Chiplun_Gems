import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContentTour = ({ showContent }) => {
  const [showAllTouristplaces, setShowAllTouristplaces] = useState(false);

  const touristplaces = [
    {
      name: "Vashishti River",
      location: "Chiplun, Maharashtra",
      description: [
        "The Vashishti River is a scenic river that flows through Chiplun, offering beautiful views and opportunities for boating and river-side picnics.",
        "Enjoy the serene beauty of the river and indulge in activities like boating or simply relax by its banks.",
      ],
      rating: 4.6,
      images: [
        "https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048195/chiplun/Vaishishti_River_pwf2yh.jpg",
      ],
      tags: ["Nature", "River", "Boating"],
    },
    {
      name: "Walavalkar Shivaji Museum",
      location: "Chiplun, Maharashtra",
      description: ["The Walavalkar Shivaji Museum is a museum dedicated to showcasing the life and achievements of Chhatrapati Shivaji Maharaj, the legendary Maratha warrior king.", "Explore the museum to learn about the rich history and legacy of Shivaji Maharaj through various exhibits and artifacts."],
      rating: 4.4,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048420/chiplun/walavalkar-shivaji-museum-chiplun_mdtgct.jpg"],
      tags: ["Museum", "History", "Culture"]
    },
    {
      name: "Parshuram Temple",
      location: "Chiplun, Maharashtra",
      description: ["Parshuram Temple is a popular Hindu temple dedicated to Lord Parshuram, the sixth avatar of Lord Vishnu.", "Visit the temple to seek blessings and admire the beautiful architecture and peaceful surroundings."],
      rating: 4.3,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048194/chiplun/Parshuram_Temple_Chiplun_kenscp.jpg"],
      tags: ["Religious", "Spirituality", "Architecture"]
    },
    {
      name: "Koyna Wildlife Sanctuary",
      location: "Chiplun, Maharashtra",
      description: ["Koyna Wildlife Sanctuary is a protected area known for its rich biodiversity and natural beauty.", "Embark on a wildlife safari to spot various species of animals, birds, and plants amidst the lush greenery of the sanctuary."],
      rating: 4.5,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048194/chiplun/koyna_jrhn2v.jpg"],
      tags: ["Wildlife", "Nature", "Safari"]
    },
    {
      name: "Marleshwar Temple",
      location: "Chiplun, Maharashtra",
      description: ["Marleshwar Temple is a famous Hindu temple dedicated to Lord Shiva, situated amidst picturesque surroundings.", "Visit the temple and marvel at the natural rock formations and cascading waterfalls nearby, creating a tranquil and spiritual ambiance."],
      rating: 4.7,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048195/chiplun/Marleshwar_xs7g8k.jpg"],
      tags: ["Religious", "Waterfall", "Nature"]
    },
    {
      name: "Sawatsada Waterfall",
      location: "Chiplun, Maharashtra",
      description: ["Sawatsada Waterfall is a scenic waterfall nestled in the lush greenery of Chiplun.", "Witness the cascading waters and enjoy the refreshing atmosphere as you soak in the natural beauty of the surroundings."],
      rating: 4.4,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1687956287/chiplun/189644459Sawatsada_Falls_m78o74.jpg"],
      tags: ["Waterfall", "Nature", "Scenic"]
    },
    {
      name: "Koyna Dam",
      location: "Chiplun, Maharashtra",
      description: ["Koyna Dam is a majestic dam built on the Koyna River, surrounded by picturesque landscapes.", "Visit the dam to witness its grandeur and enjoy the panoramic views of the reservoir and surrounding hills."],
      rating: 4.4,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048194/chiplun/koynadam_vs7ehb.jpg"],
      tags: ["Dam", "Scenic", "Nature"]
    },
    {
      name: "Guhagar Beach",
      location: "Chiplun, Maharashtra",
      description: ["Guhagar Beach is a beautiful and serene beach located near Chiplun.", "Relax on the golden sands, take a dip in the clear waters, and enjoy the stunning views of the Arabian Sea."],
      rating: 4.5,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1687953497/chiplun/guhagar-beach1_ik2il9.jpg"],
      tags: ["Beach", "Nature", "Relaxation"]
    },
    {
      name: "Vindhyavasini Temple",
      location: "Chiplun, Maharashtra",
      description: ["Vindhyavasini Temple is a popular temple dedicated to Goddess Vindhyavasini, situated atop a hill.", "Climb the steps to reach the temple, admire the panoramic views, and seek blessings from the goddess."],
      rating: 4.3,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048196/chiplun/Vidyavasini-Manidr-Chiplun_itzcx2.jpg"],
      tags: ["Religious", "Hilltop", "Panoramic Views"]
    },
    {
      name: "Pavas Museum",
      location: "Chiplun, Maharashtra",
      description: ["Pavas Museum is a unique museum showcasing the artifacts and cultural heritage of the Konkan region.", "Explore the exhibits to learn about the local art, crafts, traditions, and history of the Konkan region."],
      rating: 4.4,
      images: ["https://res.cloudinary.com/dcg3tk1dl/image/upload/v1688048194/chiplun/pawas_musem_nsjn6r.webp"],
      tags: ["Museum", "Culture", "Heritage"]
    }
    // Add other tourist places here...
  ];
  const displayedTouristplaces = showAllTouristplaces
    ? touristplaces
    : touristplaces.slice(0, 3);

  const handleReadMore = (event) => {
    event.preventDefault();
    setShowAllTouristplaces(true);
  };

  const handleReadLess = (event) => {
    event.preventDefault();
    setShowAllTouristplaces(false);
  };

  return (
    <div className={`content-tour ${showContent ? "show" : ""}`}>
      <h1>Tourist Places to Visit in Chiplun</h1>
      <div className="content-tourist">
        <div className="rest-cards">
          {displayedTouristplaces.map((hos, index) => (
            <div className="cards-own" key={index}>
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={hos.images[0]}
                  alt={hos.name}
                />
              </div>
              <div className="card-content">
                <Link to={`/touristplaces/${hos.name}`}>
                  <button className="dog-card-button">
                    <h2>{hos.name}</h2>
                  </button>
                </Link>
                <div className="card-details">
                  <p>
                    <span className="specialties">Tags:</span>{" "}
                    {hos.tags ? hos.tags.join(", ") : ""}
                  </p>
                  <p>
                    <span className="contact">Location:</span>{" "}
                    {hos.location}
                  </p>
                  <div className="card-rating">
                    <span className="rating-label">Rating:</span>{" "}
                    <span className="rating">{hos.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {showAllTouristplaces ? (
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
            Chiplun is known for its mango orchards, pleasant climate, and
            proximity to the Konkan region. It serves as a popular stopover for
            travelers heading to Goa and is a gateway
            <br />
            to the stunning Western Ghats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentTour;

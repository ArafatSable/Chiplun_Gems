import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
const TourDetails = () => {
  const [tour, setTour] = useState({});
  const { name } = useParams();

  useEffect(() => {
    // Simulating API data
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

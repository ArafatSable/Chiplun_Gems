import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContentProduct = ({ showContent }) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const products_s = [
    {
      name: 'Laptop',
      category: 'Electronics',
      description: 'Powerful laptop for all your needs.',
      price: 999,
      imageUrl: 'https://example.com/laptop.jpg',
      tags: ['new', 'electronics', 'laptop']
    },
    {
      name: 'T-Shirt',
      category: 'Clothing',
      description: 'Comfortable and stylish T-shirt.',
      price: 20,
      imageUrl: 'https://example.com/tshirt.jpg',
      tags: ['clothing', 'tshirt', 'sale']
    },
    {
      name: 'Smartphone',
      category: 'Electronics',
      description: 'The latest smartphone with advanced features.',
      price: 699,
      imageUrl: 'https://example.com/smartphone.jpg',
      tags: ['electronics', 'smartphone']
    },
    {
      name: 'Headphones',
      category: 'Electronics',
      description: 'High-quality headphones for immersive audio experience.',
      price: 129,
      imageUrl: 'https://example.com/headphones.jpg',
      tags: ['electronics', 'headphones']
    },
    {
      name: 'Jeans',
      category: 'Clothing',
      description: 'Classic denim jeans for everyday wear.',
      price: 50,
      imageUrl: 'https://example.com/jeans.jpg',
      tags: ['clothing', 'jeans']
    },
    {
      name: 'Wireless Mouse',
      category: 'Electronics',
      description: 'Ergonomic wireless mouse for improved productivity.',
      price: 35,
      imageUrl: 'https://example.com/mouse.jpg',
      tags: ['electronics', 'mouse']
    },
    {
      name: 'Backpack',
      category: 'Accessories',
      description: 'Spacious backpack for carrying all your essentials.',
      price: 45,
      imageUrl: 'https://example.com/backpack.jpg',
      tags: ['accessories', 'backpack']
    },
    {
      name: 'Sneakers',
      category: 'Footwear',
      description: 'Stylish and comfortable sneakers for casual outings.',
      price: 80,
      imageUrl: 'https://example.com/sneakers.jpg',
      tags: ['footwear', 'sneakers']
    },
    {
      name: 'Coffee Maker',
      category: 'Appliances',
      description: 'Automatic coffee maker for brewing your favorite beverages.',
      price: 149,
      imageUrl: 'https://example.com/coffeemaker.jpg',
      tags: ['appliances', 'coffeemaker']
    },
    {
      name: 'Yoga Mat',
      category: 'Fitness',
      description: 'Non-slip yoga mat for practicing yoga and meditation.',
      price: 30,
      imageUrl: 'https://example.com/yogamat.jpg',
      tags: ['fitness', 'yogamat']
    },
    {
      name: 'Wireless Earbuds',
      category: 'Electronics',
      description: 'Compact wireless earbuds with crystal-clear sound.',
      price: 89,
      imageUrl: 'https://example.com/earbuds.jpg',
      tags: ['electronics', 'earbuds']
    },
    {
      name: 'Blender',
      category: 'Kitchen Appliances',
      description: 'High-powered blender for making smoothies and shakes.',
      price: 79,
      imageUrl: 'https://example.com/blender.jpg',
      tags: ['kitchenappliances', 'blender']
    },
    {
      name: 'Watch',
      category: 'Accessories',
      description: 'Elegant watch to complement your style.',
      price: 120,
      imageUrl: 'https://example.com/watch.jpg',
      tags: ['accessories', 'watch']
    },
    {
      name: 'Hoodie',
      category: 'Clothing',
      description: 'Cozy hoodie for chilly evenings.',
      price: 45,
      imageUrl: 'https://example.com/hoodie.jpg',
      tags: ['clothing', 'hoodie']
    },
    {
      name: 'Gaming Console',
      category: 'Electronics',
      description: 'Next-gen gaming console for immersive gaming experiences.',
      price: 399,
      imageUrl: 'https://example.com/gamingconsole.jpg',
      tags: ['electronics', 'gamingconsole']
    },
    {
      name: 'Dumbbells Set',
      category: 'Fitness',
      description: 'Adjustable dumbbells set for strength training workouts.',
      price: 199,
      imageUrl: 'https://example.com/dumbbells.jpg',
      tags: ['fitness', 'dumbbells']
    },
    {
      name: 'Sunglasses',
      category: 'Accessories',
      description: 'Stylish sunglasses to protect your eyes from the sun.',
      price: 25,
      imageUrl: 'https://example.com/sunglasses.jpg',
      tags: ['accessories', 'sunglasses']
    },
    {
      name: 'Portable Charger',
      category: 'Electronics',
      description: 'Compact portable charger for charging devices on the go.',
      price: 29,
      imageUrl: 'https://example.com/portablecharger.jpg',
      tags: ['electronics', 'portablecharger']
    },
    {
      name: 'Running Shoes',
      category: 'Footwear',
      description: 'Lightweight running shoes for enhanced performance.',
      price: 90,
      imageUrl: 'https://example.com/runningshoes.jpg',
      tags: ['footwear', 'runningshoes']
    },
    {
      name: 'Desk Lamp',
      category: 'Home Decor',
      description: 'Adjustable desk lamp for brightening up your workspace.',
      price: 35,
      imageUrl: 'https://example.com/desklamp.jpg',
      tags: ['homedecor', 'desklamp']
    }
  ];
  
  const displayedProducts = showAllProducts ? products_s : products_s.slice(0, 3);

  const handleReadMore = (event) => {
    event.preventDefault();
    setShowAllProducts(true);
  };

  const handleReadLess = (event) => {
    event.preventDefault();
    setShowAllProducts(false);
  };

  return (
    <div className="content-product">
    <div className={`content-tour ${showContent ? "show" : ""}`}></div>
      <h1>Featured Products</h1>
      <div className="product-list">
        {displayedProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img
                className="product-image"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="product-details">
              <Link to={`/products/${product._id}`}>
                <button className="product-button">
                  <h2>{product.name}</h2>
                </button>
              </Link>
              <p>
                <span className="product-specialties">Price:</span>{" "}
                ${product.price}
              </p>
              <p>
                <span className="product-category">Category:</span>{" "}
                {product.category}
              </p>
              <div className="product-rating">
                <span className="product-rating-label">Rating:</span>{" "}
                <span className="product-rating-value">{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAllProducts ? (
        <div className="read-more" onClick={handleReadMore}>
          <a href="#" onClick={handleReadMore}>
            &gt; Show More
          </a>
        </div>
      ) : (
        <div className="read-more" onClick={handleReadLess}>
          <a href="#" onClick={handleReadLess}>
            &lt; Show Less
          </a>
        </div>
      )}
    </div>
  );
};

export default ContentProduct;

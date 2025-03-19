import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductListing.css";

const plants = [
  { id: 1, name: "Monstera", price: 20, image: "/images/monstera.jpg" },
  { id: 2, name: "Snake Plant", price: 15, image: "/images/snakeplant.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", price: 30, image: "/images/fiddlefig.jpg" },
  { id: 4, name: "Aloe Vera", price: 10, image: "/images/aloevera.jpg" },
  { id: 5, name: "Peace Lily", price: 25, image: "/images/peacelily.jpg" },
  { id: 6, name: "Pothos", price: 18, image: "/images/pothos.jpg" },
];

export default function ProductListing() {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {plants.map(plant => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

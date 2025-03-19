import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="header">
      <h1>Green Haven</h1>
      <div>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </div>
    </nav>
  );
}

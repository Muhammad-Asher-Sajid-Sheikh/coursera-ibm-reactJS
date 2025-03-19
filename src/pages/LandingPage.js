import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Green Haven</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  );
}

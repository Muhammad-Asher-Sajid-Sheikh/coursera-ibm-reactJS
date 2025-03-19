import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import "../styles/ShoppingCart.css";

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Price: ${cart.totalPrice}</p>
      {cart.items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <button className="checkout">Coming Soon</button>
    </div>
  );
}

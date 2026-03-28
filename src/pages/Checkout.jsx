import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();

    if (address.trim().length < 10) {
      toast.error("Address must be at least 10 characters");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: cartTotal,
      address,
      date: new Date().toLocaleString(),
      
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    clearCart();
    setAddress("");
    toast.success("Order placed successfully!");
    navigate("/orders"); // redirect to Order History
  };

  return (
    <form onSubmit={handleCheckout} className="checkout-form">
      <h2>Checkout</h2>
      <textarea
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <p>Total: ${cartTotal}</p>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
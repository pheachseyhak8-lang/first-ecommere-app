import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 className="empty">Your cart is empty!!</h2>;
  }
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>${item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.id)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <div className="cart-right">
            <strong>${(item.price * item.qty).toFixed(2)}</strong>
            <button
            
              className="remove"
              onClick={() => removeItem(item.id)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}

      <h3 className="total">Total: ${totalPrice.toFixed(2)}</h3>
      
      <Link to="/checkout">
       <button className="checkout-btnn">
          Go to Checkout
     </button>
   </Link>


    </div>
  );
};

export default Cart;

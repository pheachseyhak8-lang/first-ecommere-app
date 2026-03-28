import { useState, useEffect } from "react";
import "./OrderHistory.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) return <p className="no-orders">No orders yet.</p>;

  return (
    <div className="order-history-container">
      <h2 className="title">Order History</h2>
      {orders
        .slice()
        .reverse()
        .map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span>Order ID: {order.id}</span>
              <span>{order.date}</span>
            </div>
            <div className="order-address">
              <strong>Address:</strong> {order.address}
            </div>
            <div className="order-items">
              <strong>Items:</strong>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.title} x {item.qty} (${item.price * item.qty})
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-total">
              <strong>Total:</strong> $
            {order.items
              .reduce((sum, item) => sum + item.price * item.qty, 0)
              .toLocaleString()}
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderHistory;
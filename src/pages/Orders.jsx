import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";



const Orders = () => {
  const { orders, cancelOrder } = useContext(OrderContext);
  


  if (orders.length === 0) {
    return <h2>No Orders Yet</h2>;
  }

  return (
    <div className="history-container">
      <h2 className="history-title">Order History</h2>

      {orders.map(order => (
        <div key={order.id} className="order-card">

          <p className="order-date">
            Date: {order.date}
          </p>

          <p>Address: {order.address}</p>

          <p>
            Status:
            <span className={`status ${order.status}`}>
              {order.status}
            </span>
          </p>

          <div className="order-items">
            {order.items.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.title} x {item.qty}</span>
                <span>
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="order-total">
            Total: ${order.total.toFixed(2)}
          </div>

          {order.status === "Pending" && (
            <button
              className="cancel-btn"
              onClick={() => cancelOrder(order.id)}
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Orders;

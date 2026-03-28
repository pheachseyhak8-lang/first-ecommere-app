import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const cancelOrder = (id) => {
    const updated = orders.map(order => 
      order.id === id ? { ...order, status: "Canceled" } : order
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <OrderContext.Provider value={{ orders, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
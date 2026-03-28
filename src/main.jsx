import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { OrderProvider } from "./context/OrderContext";
import { RatingProvider } from "./context/RatingContext";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <OrderProvider>
            <RatingProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </RatingProvider>
          </OrderProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
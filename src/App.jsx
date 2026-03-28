import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderHistory from "./pages/OrderHistory";
import Footer from "./components/Footer"; // ✅ ADD

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />

      {/* 👉 main layout */}
      <div >
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
              </>
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrderHistory />
              </ProtectedRoute>
            }
          />

          {/* Product Detail */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* ✅ Footer always bottom */}
      <Footer />
    </>
  );
}

export default App;
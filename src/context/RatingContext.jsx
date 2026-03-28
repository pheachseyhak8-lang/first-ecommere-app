import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  // Load ratings from localStorage
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("ratings");
    return saved ? JSON.parse(saved) : {};
  });

  // Save ratings to localStorage
  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  // ⭐ Add or Update Rating (1 per user)
  const addRating = (productId, value) => {
    if (!user) {
      alert("Please login to rate this product");
      return;
    }

    setRatings(prev => {
      const productRatings = prev[productId] || {};

      return {
        ...prev,
        [productId]: {
          ...productRatings,
          [user.id]: value
        }
      };
    });
  };

  // ⭐ Get Average Rating
  const getAverage = (productId) => {
    const productRatings = ratings[productId] || {};
    const values = Object.values(productRatings);

    if (values.length === 0) return 0;

    const sum = values.reduce((a, b) => a + b, 0);
    return (sum / values.length).toFixed(1);
  };

  // ⭐ Get Review Count
  const getCount = (productId) => {
    return Object.keys(ratings[productId] || {}).length;
  };

  // ⭐ Get Current User Rating
  const getUserRating = (productId) => {
    if (!user) return 0;
    return ratings[productId]?.[user.id] || 0;
  };

  return (
    <RatingContext.Provider
      value={{
        addRating,
        getAverage,
        getCount,
        getUserRating
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};
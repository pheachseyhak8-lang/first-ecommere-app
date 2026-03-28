import "./ProductCard.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { RatingContext } from "../context/RatingContext";

const ProductCard = ({ id, image, title, price, description }) => {
  const { addToCart } = useContext(CartContext);
  const { addRating, getAverage, getCount, getUserRating } =
    useContext(RatingContext);

  const [showModal, setShowModal] = useState(false);

  const product = { id, image, title, price, description };

  const average = getAverage(id);
  const userRating = getUserRating(id);

  return (
    <>
      {/* ===== Product Card (Clean) ===== */}
      <div className="product-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>

        <button
          className="details-btn"
          onClick={() => setShowModal(true)}
        >
          View Details
        </button>
      </div>

      {/* ===== Modal Detail ===== */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p><strong>Price:</strong> ${price}</p>
            <p>{description}</p>

            {/* ⭐ Rating System */}
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => addRating(id, star)}
                  className={`star ${
                    star <= userRating ? "filled" : ""
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="rating-info">
              ⭐ {average} / 5 ({getCount(id)} reviews)
            </p>

            {/* 🛒 Add To Cart */}
            <button
              className="add-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
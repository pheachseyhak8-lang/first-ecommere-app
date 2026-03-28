import Hero from "../components/Hero";
import Products from "../components/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="home-section">
        <h2 className="section-title">🔥 Featured Products</h2>
        <Products />
      </section>

      {/* Promotion Banner */}
      <section className="promo">
        <div className="promo-content">
          <h2>Super Sale 🚗</h2>
          <p>Get up to 50% off on selected supercars</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
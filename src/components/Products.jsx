import { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import "./Products.css"
import p1 from "../assets/c-6.jpg";
import p2 from "../assets/c-5.webp";
import p3 from "../assets/carrr1.webp";
import p4 from "../assets/carr.webp";
import p5 from "../assets/ca1.webp";
import p6 from "../assets/car11.webp";
import p7 from "../assets/Roy.webp";
import p8 from "../assets/C1.png";
import p9 from "../assets/c123.webp";
import p10 from "../assets/download.webp";
import p11 from "../assets/1-car.webp";
import p12 from "../assets/yellow.webp";
import p13 from "../assets/yellow.webp";
import p14 from "../assets/yellow.webp";
import p15 from "../assets/carr.webp";
import p16 from "../assets/carr.webp";
import p17 from "../assets/download.webp";
import p18 from "../assets/download.webp";

const Products = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const items = [
    { id: 1, title: "Tesla", price: 2000000, image: p1 },
    { id: 2, title: "Lamborghini", price: 15000000, image: p2 },
    { id: 3, title: "Ferrari", price: 30000000, image: p3 },
    { id: 4, title: "Mycar", price: 300000000, image: p4 },
    { id: 5, title: "LamBo", price: 20000000, image: p5 },
    { id: 6, title: "Car LamBo", price: 150000000, image: p6 },
    { id: 7, title: "Lambo", price: 300000000, image: p7 },
    { id: 8, title: "Car", price: 3000000000, image: p8 },
    { id: 9, title: "Lamborg Mode", price: 5000000000, image: p9 },
    { id: 10, title: "Lamborg Mode Red", price: 50000000000, image: p10 },
    { id: 11, title: "Dark Light", price: 5000000000000, image: p11 },
    { id: 12, title: "Yellow Car", price: 5000000000000, image: p12 },
    { id: 13, title: "Light Car", price: 5000000000000, image: p13 },
    { id: 14, title: "Dark Car", price: 5000000000000, image: p14 },
    { id: 15, title: "Custom Car", price: 300000000, image: p15 },
    { id: 16, title: "K Car", price: 300000000, image: p16 },
     { id: 17, title: "Lamborg Mode Red", price: 50000000000, image: p17 },
      { id: 18, title: "Lamborg Mode Red", price: 50000000000, image: p18 },
  ];

  // Fake loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Filter + Sort
  const filteredProducts = useMemo(() => {
    let result = [...items];

    result = result.filter(item =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    if (sortOption === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [debouncedSearch, sortOption]);

  // Pagination
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  // Reset page
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortOption]);

  if (loading) return <Loader />;

  return (
  <div className="products-container">

    {/* ✅ TOP CONTROLS (CENTER) */}
    <div className="top-controls">

      <div className="search-box">
        <input
          type="text"
          placeholder=" 🔍Search car..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low-high">💲 Low → High</option>
          <option value="high-low">💲 High → Low</option>
        </select>

        <button 
          className="reset-btn"
          onClick={() => {
            setSearch("");
            setSortOption("");
          }}
        >
          🔄 Reset
​​       </button>
      </div>

      {/* ✅ RESULT TEXT CENTER */}
      <p className="result-text">
        Showing {filteredProducts.length} products
      </p>

    </div>

    {/* Products */}
    <div className="products">
      {currentProducts.length > 0 ? (
        currentProducts.map(item => (
          <ProductCard key={item.id} {...item} />
        ))
      ) : (
        <h3 className="no-data">😢 No products found</h3>
      )}
    </div>

    {/* Pagination */}
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={currentPage === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
    </div>

  </div>

  );
};

export default Products;
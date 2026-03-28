import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
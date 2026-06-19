import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fake Store</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      >
        <option value="all">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
              }}
            />

            <h3 style={{ fontSize: "16px" }}>
              {product.title}
            </h3>

            <p>
              <strong>${product.price}</strong>
            </p>

            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
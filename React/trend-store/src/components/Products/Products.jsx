// import products from "../../productData";
import ProductItem from "./ProductItem";
import "./Products.css";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setİsLoading] = useState(false);
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const fethProductHandler = async () => {
    setİsLoading(true);
    const data = await fetch(
      "https://my-pos-application-api.onrender.com/api/products/get-all"
    );

    const response = await data.json();
    const newData = response.map((item) => {
      return {
        id: item._id,
        name: item.title,

        ...item,
      };
    });
    setProducts(newData);

    setİsLoading(false);
  };

  return (
    <main className="products-wrapper">
      {isLoading && <p>Loading...</p>}
      <ul className="products">{productList}</ul>
      <button className="btn" onClick={fethProductHandler}>
        Get Fetch
      </button>
    </main>
  );
};

export default Products;

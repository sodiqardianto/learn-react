import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";

function App() {
  const [products, setProducts] = useState(Products);
  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 77777), ...product },
    ]);
  };
  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(updatedProduct);
  };
  const onEditProduct = (id, data) => {
    const updatedProduct = products.map((product) => {
      if (product.id === id) {
        return { ...product, ...data };
      }
      return product;
    });
    setProducts(updatedProduct);
    console.log(updatedProduct);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil </div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;

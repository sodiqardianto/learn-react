import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../contexts/products";

export default function ProductList({
  onDeleteProduct,
  onEditProduct,
}) {
  const { products } = useContext(ProductContext)
  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}
          />
        );
      })}
    </div>
  );
}

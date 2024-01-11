import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({products, onDeleteProduct, onEditProduct}) {
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
  )
}

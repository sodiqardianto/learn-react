import { createContext } from "react";
import {
  createProduct,
  deleteProduct,
  editProduct,
  fetchProduct,
} from "../api/products.api";
import { useState } from "react";

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetchProduct()
      .then((response) => {
        setProducts(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const onCreateProduct = async (product) => {
    try {
      const response = await createProduct(product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const onDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      const updatedProduct = products.filter((product) => {
        return product.id !== id;
      });
      setProducts(updatedProduct);
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
    }
  };

  const onEditProduct = async (id, data) => {
    try {
      const response = await editProduct(id, data);
      const updatedProduct = products.map((product) => {
        if (product.id === id) {
          return { ...product, ...response.data };
        }
        return product;
      });
      setProducts(updatedProduct);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const valueToConsume = {
    products,
    onCreateProduct,
    onDeleteProduct,
    onEditProduct,
    getProducts,
  };

  return (
    <ProductContext.Provider value={valueToConsume}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;

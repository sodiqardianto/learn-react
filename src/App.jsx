import "./App.css";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import { useContext, useEffect } from "react";
import ProductContext from "./contexts/products";

function App() {
  const {getProducts} = useContext(ProductContext)
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="app-title">Belanja Mobil </div>
      <ProductCreate />
      <ProductList />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter"
import "./App.css"
import { useEffect } from "react";
import { useProducts } from "./pages/Products/store/useProducts";
import { getProducts } from "./pages/Products/api/api";

function App() {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    if (!products.length) {
      getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
    }
  }, [])

  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header" 
import { ShowProduct } from "./components/Products/ShowProduct/ShowProduct"
import { AddProduct } from "./components/Products/AddProduct/AddProducts"
import { useEffect, useState } from "react";
import { Product } from "./components/Products/AddProduct/AddProductData";
import { fetchProducts } from "./api/getApiProducts";


function App() {

  const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };
        getProducts();
    }, [])

    const handleAddProduct = (product: Product) => {
      setProducts([...products, product])
    }

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div><h1>Welcome to my page</h1></div>}/> 
          <Route path="/Home" element={<ShowProduct products={products}/>} />
          <Route path="/Add-Product" element={<AddProduct handleAddProduct={handleAddProduct}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App


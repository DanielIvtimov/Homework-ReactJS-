import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header" 
import { ShowProduct } from "./components/Products/ShowProduct/ShowProduct"
import { AddProduct } from "./components/Products/AddProduct/AddProducts"


function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div><h1>Welcome to my page</h1></div>}/> 
          <Route path="/Home" element={<ShowProduct />} />
          <Route path="/Add-Product" element={<AddProduct />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App


import { useEffect, useState } from "react"
import { fetchProducts } from "../../../api/getApiProducts";
import { ProductCard } from "../ProductsCard/ProductsCard";
import "./ShowProduct.css"
import { Product } from "../AddProduct/AddProductData";

// interface Product {
//     category: string,
//     description: string
//     id: number,
//     image: string,
//     title: string,
//     price: number,
// }

interface ShowProductsProps {
    products: Product[];
}

export const ShowProduct = ({products}: ShowProductsProps) => {
    
    return (
        <div className="product-lists">
            {products.map(product => (<ProductCard key={product.id} category={product.category} description={product.description} id={product.id} image={product.image} title={product.title} price={product.price}/>))}
        </div>
    )
}

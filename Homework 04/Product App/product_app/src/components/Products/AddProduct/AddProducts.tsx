import React, { useState } from "react"
import { Product } from "./AddProductData"
import { CreateProduct } from "./Product_Service";
import "./AddProductStyles.css"
import { fetchProducts } from "../../../api/getApiProducts";


export const AddProduct = () => {
    const [product, setProduct] = useState<Product>({
        category: "",
        description: "",
        id: 0,
        image: "",
        title: "",
        price: 0,
    });

    const [saveCreatedProducts, setSaveCreatedProducts] = useState<Product[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
        const value = event.target.value; 
        setProduct({
            ...product,
            [key]: value
        });
    };

    const handleSumbit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(product);
        const newProduct = await CreateProduct(product);
        setSaveCreatedProducts([...saveCreatedProducts, newProduct])
        console.log("Product is craeted:", newProduct);

        const showNewCraetedProduct = await fetchProducts();
        setProduct(showNewCraetedProduct)
    }

    return (
        <div className="add-product-container">
            <h2 className="add-product-heading">Add Product</h2>
            <form className="add-product-form">
                <label className="add-product-label">
                    Category: 
                    <select className="add-product-select" name="category" value={product.category} onChange={(event) => handleChange(event, "category")}>
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                    </select>
                </label>
                <input className="add-product-input-description" type="text" placeholder="Description" name="description" value={product.description} onChange={(event) => handleChange(event, "description")} />
                <input className="add-product-input-title" type="text" placeholder="Title" name="title" value={product.title} onChange={(event) => handleChange(event, "title")}/>
                <input className="add-product-input-image" type="text" placeholder="Image URL" name="image" value={product.image} onChange={(event) => handleChange(event, "image")}/>
                <input className="add-product-input-price" type="number" placeholder="Price" name="price" value={product.price} onChange={(event) => handleChange(event, "price")}/>
                <button className="add-product-button" onClick={handleSumbit}>Save</button>
            </form>
        </div>
    )
}

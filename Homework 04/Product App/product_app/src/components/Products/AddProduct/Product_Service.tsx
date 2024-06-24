import { Product } from "./AddProductData";

export const CreateProduct = async (productData: Product) => {
    try{
        const response = await fetch("https://fakestoreapi.com/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        console.log('Product is created:', data)
        return data;
    }catch(error){
        console.log("Error", error);
    }
}

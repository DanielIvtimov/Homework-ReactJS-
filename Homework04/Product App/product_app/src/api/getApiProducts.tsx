export const fetchProducts = async () => {
    try{
        const response = await fetch("https://fakestoreapi.com/products") 
        console.log("Fetching products:", response) // Gi pregleduvam site produkti od samoto api sto se vo niza 
        if(!response){
        console.log("Could not get products");
        }
        const data = await response.json();
        console.log('result is ', data);
        return data; 
    }catch(error){
        console.log("Error", error);
        return;
    }
}

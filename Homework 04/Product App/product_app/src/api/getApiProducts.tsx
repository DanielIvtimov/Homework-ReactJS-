export const fetchProducts = async () => {
    try{
        console.log("Fetching products:") // Gi pregleduvam site produkti od samoto api sto se vo niza 
        const response = await fetch("https://fakestoreapi.com/products") 
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

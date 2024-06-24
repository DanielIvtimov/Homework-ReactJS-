import "./ProductsCard.css"

interface ProductCardProps {
    category: string,
    description: string
    id: number,
    image: string,
    title: string,
    price: number,
}

export const ProductCard = ({category, description, image, title, price}: ProductCardProps) => {

    return(
        <div className="product-card">
            <h5 className="product-category">{category}</h5>
            <p className="product-description">{description}</p>
            <img src={image} alt="photo" className="product-image"/>
            <h5 className="product-title">{title}</h5>
            <p className="product-price">{price}</p>
        </div>
    )
}

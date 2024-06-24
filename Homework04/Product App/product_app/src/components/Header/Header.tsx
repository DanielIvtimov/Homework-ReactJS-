import { NavLink } from "react-router-dom"
import "./Header.css"

export const Header = () => {
    return (
        <div>
           <header className="header">
                <nav className="navLinks">
                    <ul>
                        <NavLink to="/Home" className="navLink">Home</NavLink>
                        <NavLink to="/Add-Product" className="navLink">Add Product</NavLink>
                    </ul>
                </nav>
            </header> 
        </div>
    )
} 

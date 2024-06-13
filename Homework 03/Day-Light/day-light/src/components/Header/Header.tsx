import { useContext } from "react"
import "./Header.css"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"

export const Header = () => {
    const { theme ,toggleTheme } = useContext(ThemeContext);

    return(
        <div className="header-part">
            <h1 className="header-text">Welcome to Day-Light Application</h1>
            <button className="header-main-button" onClick={toggleTheme}>
                {theme}
            </button>
        </div>
    )
} 

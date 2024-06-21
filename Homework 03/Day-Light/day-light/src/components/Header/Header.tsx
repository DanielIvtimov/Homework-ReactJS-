import { useContext } from "react"
import "./Header.css"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"

export const Header = () => {
    const { theme ,toggleTheme, ourStyles } = useContext(ThemeContext);

    return(
        <div className="header-part" style={{backgroundColor: ourStyles.backgroundColor, color: ourStyles.color}}>
            <h1 className="header-text" style={{color: ourStyles.color}}>Welcome to Day-Light Application</h1>
            <button className="header-main-button" onClick={toggleTheme}>
                {theme}
            </button>
        </div>
    )
} 

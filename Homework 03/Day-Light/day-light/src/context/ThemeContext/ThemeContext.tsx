import React, { ReactNode, createContext, useState } from "react"; 

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
    buttonLook: string;
    ourStyles: {
        backgroundColor: string,
        color: string,
    }
}

const contextThemeDefaultValue: ThemeContextProps = {
    theme: "",
    toggleTheme: () => {},
    buttonLook: "",
    ourStyles: {
        backgroundColor: "",
        color: ""
    },
};

interface ContextThemeChildrenProps {
    children: ReactNode;
}

export const ThemeContext = createContext(contextThemeDefaultValue);

export const ThemeContextProvider = ({children}: ContextThemeChildrenProps) => {
    const [theme, setTheme] = useState("LIGHT");
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT')); // Primerot od casot :D
    }; 
    const buttonLook = theme === 'DARK' ? 'LIGHT' : 'DARK'; // Primerot od casot :D 

    const ourStyles = theme === 'DARK' ? { backgroundColor: 'black', color: 'pink'} : { backgroundColor: 'blue', color: 'white'}

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, buttonLook, ourStyles}}>
            {children}
        </ThemeContext.Provider>
    )
}









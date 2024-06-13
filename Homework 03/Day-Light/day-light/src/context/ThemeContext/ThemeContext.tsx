import React, { ReactNode, createContext, useState } from "react"; 

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
    buttonLook: string;
}

const contextThemeDefaultValue: ThemeContextProps = {
    theme: "",
    toggleTheme: () => {},
    buttonLook: "",
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
    return (
        <ThemeContext.Provider value={{theme, toggleTheme, buttonLook,}}>
            {children}
        </ThemeContext.Provider>
    )
}









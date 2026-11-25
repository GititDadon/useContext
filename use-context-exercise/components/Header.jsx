import { useContext } from 'react'
import ThemeContext from './ThemeContext.jsx'
export default function Header(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <header className={`header ${theme}`}>
        <h1>
            {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>
        <button className="toggle-theme"
        onClick={toggleTheme} 
        >Switch Mode
        </button>
        </header>
    )
}
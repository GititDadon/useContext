import { useContext } from "react";
import ThemeContext from "./ThemeContext";
export default function Footer(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <footer className={`footer ${theme}`}>
             <span>Powered by useContext</span>
             <span>Theme: {theme}</span>
        </footer>
    )
}
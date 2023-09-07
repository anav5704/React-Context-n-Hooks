import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const ThemeToggle = () => {
    const{toggleTheme, isDark, dark, light} = useContext(ThemeContext)
    const theme = isDark ? dark : light

    return (
        <button style={{background: theme.ui, color: theme.syntax}} className="btn" onClick={toggleTheme}>Toggle to {!isDark ? "dark" : "light"} mode</button>
    );
}
 
export default ThemeToggle;
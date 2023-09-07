import { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";

class Nav extends Component {
    static contextType = ThemeContext
    
    render() { 
        const {isDark, light, dark} = this.context
        const theme = isDark ? dark : light

        return (
            <nav style={{background: theme.ui, color: theme.syntax}} className="nav">
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}
 
export default Nav;
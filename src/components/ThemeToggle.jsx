import { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";

class ThemeToggle extends Component {
    static contextType = ThemeContext

    state = {  } 
    render() { 
        const{toggleTheme} = this.context

        return (
            <button onClick={toggleTheme}>Toggle to mode</button>
        );
    }
}
 
export default ThemeToggle;
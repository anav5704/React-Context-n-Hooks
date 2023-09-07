import { createContext } from 'react'
import { Component } from 'react';

// make the context
const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = { 
        isDark: true,
        light: {syntax: "#555", ui: "#ddd", bg: "#eee"},
        dark: {syntax: "#ddd", ui: "#333", bg: "#555"}
    } 

    toggleTheme = () => {
        this.setState({ isDark: !this.state.isDark})
    }

    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

// export the context
export {ThemeContext, ThemeContextProvider}
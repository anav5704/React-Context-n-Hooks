import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/AuthContext"

const Nav = () => {
    const {isDark, light, dark} = useContext(ThemeContext)
    const {user, toggleAuth} = useContext(AuthContext)
    const theme = isDark ? dark : light

    return (
        <nav style={{background: theme.ui, color: theme.syntax}} className="nav">
            <h1>Context App</h1>
            <p>{user ? "Signed in" : "Logged out"}</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button onClick={toggleAuth} >{!user ? "Sign in" : "Log out"}</button>
        </nav>
    );
}
 
export default Nav;
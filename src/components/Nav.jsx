import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/AuthContext"
import { BookContext } from "../contexts/BookContext";

const Nav = () => {
    const {isDark, light, dark} = useContext(ThemeContext)
    const {user, toggleAuth} = useContext(AuthContext)
    const {books} = useContext(BookContext)
    const theme = isDark ? dark : light

    return (
        <nav style={{background: theme.ui, color: theme.syntax}} className="nav">
            <h1>Context App</h1>
            <p>You have {books?.length} Books</p>
            <p>{user ? "Signed in" : "Logged out"}</p>
            <button onClick={toggleAuth} >{!user ? "Sign in" : "Log out"}</button>
        </nav>
    );
}
 
export default Nav;
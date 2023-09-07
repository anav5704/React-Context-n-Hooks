import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

 const BookList = () => {
     const {isDark, light, dark} = useContext(ThemeContext)
     const theme = isDark ? dark : light

    return (
        <div style={{background: theme.bg, color: theme.syntax}} className="book-list">
            <h2>Book List:</h2>
            <ul>
                <li style={{background: theme.ui}}>Harry Potter 1</li>
                <li style={{background: theme.ui}}>Goosebumps 3</li>
                <li style={{background: theme.ui}}>Hardy Boys 2</li>
            </ul>
        </div>
    );
}
 
export default BookList;
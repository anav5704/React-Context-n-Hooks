import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import {BookContext} from "../contexts/BookContext";
 
 const BookList = () => {
    const {books, dispatch} = useContext(BookContext)
     const {isDark, light, dark} = useContext(ThemeContext)
     const theme = isDark ? dark : light
     console.log(books)

    return (
        <div style={{background: theme.bg, color: theme.syntax}} className="book-list">
            <h2>Book List:</h2>
            {   books.length ? 
            <ul>
                {books.map(book => <li onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})} key={book.id} style={{background: theme.ui}}>{book.title} by {book.author}</li>)}
            </ul>
            :
            <li  style={{background: theme.ui}}>No books to read</li> }
        </div>
    ) 
}
 
export default BookList;
import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [id, setId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch({type: "ADD_BOOK", payload: {title, author, id}})
    }

  return (
    <form onSubmit={handleSubmit}>
      <input required type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input required type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <input required type="number" placeholder="Book ID" value={id} onChange={(e) => setId(e.target.value)}/>
      <button type="submit">Add Book</button>
    </form>
  )
}

export default BookForm

import { Component } from "react";

class BookList extends Component {
    state = {  } 
    render() { 
        return (
            <div className="book-list">
                <h2>Book List:</h2>
                <ul>
                    <li>Harry Potter 1</li>
                    <li>Goosebumps 3</li>
                    <li>Hardy Boys 2</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;
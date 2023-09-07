import { Component } from "react";

class Nav extends Component {
    render() { 
        return (
            <nav className="nav">
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
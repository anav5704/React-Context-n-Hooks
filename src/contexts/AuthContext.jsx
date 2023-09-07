import { Component, createContext } from "react";

const AuthContext = createContext()

class AuthContextProvider extends Component {
    state = { user: false } 

    toggleAuth = () => {
        this.setState({user: !this.state.user})
    }

    render() { 
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export {AuthContext, AuthContextProvider }
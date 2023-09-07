import Nav from "./components/Nav"
import BookList from "./components/BookList"
import { ThemeContextProvider } from "./contexts/themeContext"
import { AuthContextProvider } from "./contexts/AuthContext"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <main className="app">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Nav />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </main>
  )
}

export default App

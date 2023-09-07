import Nav from "./components/Nav"
import BookList from "./components/BookList"
import { ThemeContextProvider } from "./contexts/themeContext"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <main className="app">
      <ThemeContextProvider>
        <Nav />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </main>
  )
}

export default App

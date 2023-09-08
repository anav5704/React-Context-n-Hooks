import Nav from "./components/Nav";
import BookList from "./components/BookList";
import { ThemeContextProvider } from "./contexts/themeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BookContextProvider } from "./contexts/BookContext";
import ThemeToggle from "./components/ThemeToggle";
import BookForm from "./components/BookForm";

function App() {
  return (
    <main className="app">
      <AuthContextProvider>
        <ThemeContextProvider>
          <BookContextProvider>
            <Nav />
            <BookList />
            <BookForm />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </main>
  );
}

export default App;

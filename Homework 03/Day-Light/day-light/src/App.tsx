import { Header } from "./components/Header/Header"
import { UserDetails } from "./components/UserDetails/UserDetails"
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContext"

function App() {

  return (
    <ThemeContextProvider>
    <Header />
    <UserDetails />
    </ThemeContextProvider>
  )
}

export default App

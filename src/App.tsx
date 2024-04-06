import { useState } from "react"
import { Home } from "./pages/Home"
import { ThemeContext } from "./contexts/ThemeContext"

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme: theme, toogle: toggleTheme}}>
      <Home/>
    </ThemeContext.Provider>
  )
}

export default App

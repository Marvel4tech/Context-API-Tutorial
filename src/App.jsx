import ThemedComponent from "./components/ThemedComponent"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <div>
        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
    </div>
  )
}

export default App

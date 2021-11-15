import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './Theme'
import Serve from './Serve'


function App() {

  const themeChoice = {
    "light": lightTheme,
    "dark": darkTheme
  }

  const [theme, setTheme] = useState("light")
  
  return (
    <ThemeProvider theme={themeChoice[theme]}>
      <Serve theme={theme} setTheme={setTheme}>
        Countries Rest App
      </Serve>
    </ThemeProvider>
  );

}

export default App;

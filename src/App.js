import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './Theme'
import Main from './Main'


function App() {

  const themeChoice = {
    "light": lightTheme,
    "dark": darkTheme
  }

  const [theme, setTheme] = useState("light")
  
  return (
    <ThemeProvider theme={themeChoice[theme]}>
      <Main theme={theme} setTheme={setTheme}>
        Countries Rest App
      </Main>
    </ThemeProvider>
  );

}

export default App;

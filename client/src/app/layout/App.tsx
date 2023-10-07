import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';


  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;

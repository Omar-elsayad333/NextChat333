import '../styles/globals.css'
import { theme } from '../styles/theme';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/system';
import { AlertProvider } from '../context/AlertContext';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AlertProvider>
      </ThemeProvider>
  )
}

export default MyApp
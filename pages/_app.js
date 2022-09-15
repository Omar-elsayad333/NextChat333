import '../styles/globals.css'
import Head from 'next/head';
import { theme } from '../utils/theme';
import { ThemeProvider } from '@mui/system';

function MyApp({ Component, pageProps }) {
  return (
    <div className='app' style={{backgroundColor: '#e5e5e5', minHeight: '100vh'}}>
      <Head>
        {/* <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
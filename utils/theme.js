import { createTheme } from '@mui/material/styles';

// Global theme for the app
export const theme = createTheme({
    palette: {
        primary: {
            // main: '#1c1c1e'
            main: '#7b1fa2',
        },
        secondary: {
            // light: '#0066ff',
            // main: '#7e7e7e',
            // main: '#03a9f4',
            main: '#1c1c1e',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
        }
    },
    typography: {
        fontFamily: 'Raleway'    
    }
});
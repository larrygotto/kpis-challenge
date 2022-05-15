import { createTheme } from '@mui/material/styles';
import { mainColors } from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: mainColors.green,
        },
        secondary: {
            main: mainColors.pink,
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#8D0028",
        },
        success: {
            main: "#017531",
        },
    },
}); 
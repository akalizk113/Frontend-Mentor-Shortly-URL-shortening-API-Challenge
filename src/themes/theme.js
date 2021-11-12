import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme();

let theme = createTheme({
   palette: {
      primary: {
         main: 'hsl(180, 66%, 49%)',
         constastText: '#fff',
      },
      secondary: {
         main: 'hsl(257, 27%, 26%)',
      },
      gray: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(0, 0%, 75%)' },
         name: 'gray',
      }),
      violet: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(257, 7%, 63%)' },
         name: 'violet',
      }),
      darkblue: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(255, 11%, 22%)' },
         name: 'darkblue',
      }),

      darkviolet: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(260, 8%, 14%)' },
         name: 'darkviolet',
      }),
      error: {
         main: 'hsl(0, 87%, 67%)',
      },
      text: {
         primary: 'hsl(255, 11%, 22%)',
         secondary: 'hsl(257, 7%, 63%)',
      },
      background: {
         paper: '#f0f1f6',
      },
   },
   breakpoints: {
      values: {
         ...defaultTheme.breakpoints.values,
         xl: 1440,
         xs: 375,
      },
   },
   typography: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '500',
      htmlFontSize: 18,
      button: {
         fontFamily: "'Poppins', sans-serif",
         fontWeight: '700',
         textTransform: 'capitalize',
      },
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               color: '#fff',
               '&:hover': {
                  opacity: 0.6,
                  backgroundColor: 'hsl(180, 66%, 49%)',
               },
            },
            sizeExtra: {
               padding: '16px 40px',
               fontSize: '18px',
            },
            sizeLarge: {
               padding: '14px 40px',
               fontSize: '16px',
               borderRadius: '30px',
            },
            sizeMedium: {
               padding: '8px 22px',
               borderRadius: '20px',
            },
         },
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               color: 'hsl(255, 11%, 22%)',
               fontWeight: '500',
            },
         },
      },
      MuiContainer: {
         styleOverrides: {
            maxWidthContentWidth: {
               maxWidth: '1158px',
            },
         },
      },
   },
});

responsiveFontSizes(theme);

export default theme;

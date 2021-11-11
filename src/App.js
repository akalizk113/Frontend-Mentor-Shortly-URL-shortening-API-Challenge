import theme from './themes/theme';

import { Container, ThemeProvider, Button } from '@mui/material';

function App() {
   console.log(theme);
   return (
      <ThemeProvider theme={theme}>
         <Container maxWidth="lg" className="App">
            <Button
               variant="contained"
               color="primary"
               size="medium"
               sx={{ mt: 2 }}
            >
               Get Started
            </Button>
         </Container>
      </ThemeProvider>
   );
}

export default App;

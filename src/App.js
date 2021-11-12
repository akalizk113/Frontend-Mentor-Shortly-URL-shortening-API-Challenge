import theme from './themes/theme';

import { ThemeProvider } from '@mui/material';
import {
   Header,
   Illustration,
   Shorten,
   Statistics,
   Footer,
} from './components';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Header />
         <Illustration />
         <Shorten />
         <Statistics />
         <Footer />
      </ThemeProvider>
   );
}

export default App;

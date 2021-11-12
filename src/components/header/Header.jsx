import { Button, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { logoImg } from '../../assets/resources';

const NavItem = styled('span')(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   fontWeight: '700',
   transition: 'all 0.3s ease',
   margin: '0 16px   ',
   '&:hover': {
      cursor: 'pointer',
      color: theme.palette.text.primary,
   },
}));

const Header = () => {
   return (
      <Container maxWidth="xl" className="header__wrapper">
         <Container
            maxWidth="contentWidth"
            sx={{ display: 'flex', mt: '52px' }}
         >
            <img witdh={120} height={36} src={logoImg} alt="logo" />

            <Stack direction="row" ml="36px" sx={{ flex: 1 }}>
               <NavItem>Features</NavItem>
               <NavItem>Pricing</NavItem>
               <NavItem>Resources</NavItem>
               <NavItem sx={{ ml: 'auto', mr: '30px' }}>Login</NavItem>
               <Button variant="contained">Sign up</Button>
            </Stack>
         </Container>
      </Container>
   );
};

export default Header;

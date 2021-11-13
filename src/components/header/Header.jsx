import { Button, Stack, Container, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useCallback } from 'react';
import { logoImg } from '../../assets/resources';

const NavItem = styled('span')(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   fontWeight: '700',
   transition: 'all 0.3s ease',
   margin: '0 16px',
   '&:hover': {
      cursor: 'pointer',
      color: theme.palette.text.primary,
   },

   [theme.breakpoints.between('sm', 'md')]: {
      '&:not(:last-of-type)': {
         margin: '0 12px',
      },
   },
   [theme.breakpoints.between('xs', 'sm')]: {
      margin: '10px 0',
      color: 'white',
      fontSize: '16px',
      '&:nth-of-type(3)': {
         marginBottom: '30px',
      },
      '&:last-of-type': {
         marginTop: '30px',
      },
      '&:hover': {
         cursor: 'pointer',
         color: theme.palette.primary.main,
      },
   },
}));

const MenuIcon = styled('svg')(({ theme }) => ({
   position: 'absolute',
   right: '0',
   zIndex: 1000,
   color: '#9b99a6',
   [theme.breakpoints.up('sm')]: {
      display: 'none',
   },
}));

const Header = () => {
   const [showMenu, setShowMenu] = useState(false);

   const handleCloseMenu = useCallback((e) => {
      const target = e.target;
      if (target.closest('.css-pk4oqh-MuiStack-root')) {
         return;
      }
      setShowMenu(false);
   }, []);

   useEffect(() => {
      if (showMenu) {
         window.addEventListener('click', handleCloseMenu);
         document.body.style.overflowY = 'hidden';
      } else {
         document.body.style.overflowY = 'unset';
      }
      return () => {
         window.removeEventListener('click', handleCloseMenu);
      };
   }, [showMenu, handleCloseMenu]);

   return (
      <Container maxWidth="xl" className="header__wrapper">
         <Container
            maxWidth="contentWidth"
            sx={{
               display: 'flex',
               mt: '52px',
               p: {
                  xs: '0',
                  md: '0 24px',
               },
               '@media screen and (min-width: 375px) and (max-width: 599px)': {
                  position: 'relative',
               },
            }}
         >
            <img witdh={120} height={36} src={logoImg} alt="logo" />
            <MenuIcon
               xmlns="http://www.w3.org/2000/svg"
               aria-hidden="true"
               focusable="false"
               role="img"
               viewBox="0 0 448 512"
               width="25"
               height="25"
               onClick={() => setShowMenu((prev) => !prev)}
            >
               <path
                  fill="#aaa"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
               />
            </MenuIcon>
            <Stack
               direction={{ xs: 'column', sm: 'row' }}
               ml="36px"
               sx={{
                  flex: 1,
                  '@media screen and (min-width: 375px) and (max-width: 599px)':
                     {
                        position: 'fixed',
                        top: '96px',
                        left: '24px',
                        right: '24px',
                        height: '384px',
                        zIndex: 1000,
                        bgcolor: 'secondary.main',
                        ml: 0,
                        borderRadius: '15px',
                        p: '24px',
                        display: showMenu ? 'flex' : 'none',
                     },
               }}
            >
               <NavItem>Features</NavItem>
               <NavItem>Pricing</NavItem>
               <NavItem>Resources</NavItem>
               <Divider
                  light
                  sx={{
                     borderColor: 'rgba(223 223 223 / 0.4)',
                     display: {
                        xs: 'block',
                        sm: 'none',
                     },
                  }}
               />
               <NavItem sx={{ ml: 'auto', mr: '30px' }}>Login</NavItem>
               <Button
                  variant="contained"
                  sx={{
                     p: {
                        xs: '13px 22px',
                        sm: '8px  22px',
                     },
                  }}
               >
                  Sign up
               </Button>
            </Stack>
         </Container>
      </Container>
   );
};

export default Header;

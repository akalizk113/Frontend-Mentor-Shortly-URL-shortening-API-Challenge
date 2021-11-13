import { Button, Container, Box, Typography } from '@mui/material';
import { illustrationImg } from '../../assets/resources';
import { styled } from '@mui/material/styles';
const IllustrationImg = styled('img')(({ theme }) => ({
   position: 'absolute',
   right: '-120px',
   [theme.breakpoints.between('xs', 'md')]: {
      left: '24px',
      right: 'unset',
   },
}));
const Illustration = () => {
   return (
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
         <Container
            maxWidth="contentWidth"
            sx={{
               mt: '80px',
               display: {
                  xs: 'flex',
                  md: 'block',
               },
               flexDirection: {
                  xs: 'column',
               },
               alignItems: 'center',
               p: {
                  xs: '0',
                  md: '0 24px',
               },
            }}
         >
            <IllustrationImg
               src={illustrationImg}
               alt="illustrationImage"
               sx={{
                  maxWidth: {
                     xs: '550px',
                     sm: 'unset',
                     md: '550px',
                     lg: 'unset',
                  },
               }}
            />
            <Box
               sx={{
                  maxWidth: {
                     xs: '100%',
                     sm: '550px',
                  },
                  pt: '80px',
                  mt: {
                     xs: '320px',
                     sm: '500px',
                     md: 'unset',
                  },
                  textAlign: {
                     xs: 'center',
                     md: 'unset',
                  },
               }}
            >
               <Typography variant="h2" fontWeight="700">
                  More than just shorter links
               </Typography>
               <Typography
                  variant="body1"
                  color="text.secondary"
                  mb="48px"
                  mt="8px"
                  mx="auto"
                  fontSize="htmlFontSize"
                  fontWeight="500"
                  width={{ xs: '100%', sm: '500px' }}
               >
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
               </Typography>
               <Button variant="contained" size="large">
                  Get Started
               </Button>
            </Box>
         </Container>
      </Container>
   );
};

export default Illustration;

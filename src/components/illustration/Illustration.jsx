import { Button, Container, Box, Typography } from '@mui/material';
import { illustrationImg } from '../../assets/resources';
import { styled } from '@mui/material/styles';
const IllustrationImg = styled('img')({
   position: 'absolute',
   right: '-120px',
});
const Illustration = () => {
   return (
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
         <Container maxWidth="contentWidth" sx={{ mt: '80px' }}>
            <IllustrationImg src={illustrationImg} alt="illustrationImage" />
            <Box sx={{ width: '550px', pt: '80px' }}>
               <Typography variant="h2" fontWeight="700" fontSize="4rem">
                  More than just shorter links
               </Typography>
               <Typography
                  variant="body1"
                  color="text.secondary"
                  mb="48px"
                  mt="8px"
                  fontSize="htmlFontSize"
                  fontWeight="500"
                  width="500px"
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

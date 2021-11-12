import { Grid, Box, Typography } from '@mui/material';

const StatisticCard = ({ icon, title, desc, alignSelf }) => {
   return (
      <Grid lg={4} zIndex={1} display="flex" item>
         <Box
            width="100%"
            height="310px"
            sx={{
               alignSelf,
               position: 'relative',
               display: 'flex',
            }}
         >
            <Box
               width="88px"
               height="88px"
               sx={{
                  position: 'absolute',
                  top: 0,
                  left: '24px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
               }}
            >
               <img src={icon} alt={title} width="40px" height="40px" />
            </Box>

            <Box
               borderRadius="6px"
               mt="44px"
               bgcolor="white"
               textAlign="left"
               p="0 24px"
            >
               <Typography variant="h5" fontWeight="700" mt="80px" mb="20px">
                  {title}
               </Typography>
               <Typography variant="body1" color="text.secondary">
                  {desc}
               </Typography>
            </Box>
         </Box>
      </Grid>
   );
};

export default StatisticCard;

import { Grid, Box, Typography } from '@mui/material';

const StatisticCard = ({ icon, title, desc, alignSelf }) => {
   return (
      <Grid
         xs={12}
         lg={4}
         zIndex={1}
         display="flex"
         item
         sx={{
            mt: {
               xs: '16px',
               lg: 'unset',
            },
         }}
      >
         <Box
            width="100%"
            height="310px"
            sx={{
               alignSelf: {
                  xs: 'unset',
                  lg: alignSelf,
               },
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
                  left: {
                     xs: '50%',
                     lg: '24px',
                  },
                  transform: {
                     xs: 'translateX(-50%)',
                     lg: 'unset',
                  },
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
               textAlign={{
                  xs: 'center',
                  lg: 'left',
               }}
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

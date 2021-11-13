import { Box, Container, Typography, Grid } from '@mui/material';

import StatisticCard from './StatisticCard';

import { brandIcon, detailedIcon, fullyIcon } from '../../assets/resources';

const Statistics = () => {
   return (
      <Box
         sx={{
            bgcolor: 'background.paper',
            pb: '120px',
         }}
      >
         <Container maxWidth="xl">
            <Container
               maxWidth="contentWidth"
               sx={{
                  textAlign: 'center',
                  p: {
                     xs: '0',
                     md: '0 24px',
                  },
               }}
            >
               <Typography variant="h4" fontWeight={700}>
                  Advanced Statistics
               </Typography>
               <Typography
                  variant="body1"
                  maxWidth="524px"
                  color="text.secondary"
                  m="24px auto 0"
                  textAlign="center"
               >
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
               </Typography>
               <Grid
                  container
                  spacing="30px"
                  height={{
                     xs: 'unset',
                     lg: '400px',
                  }}
                  sx={{
                     mt: '60px',
                     position: 'relative',
                     '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '8px',
                        width: '90%',
                        margin: 'auto',
                        bgcolor: 'primary.main',
                        '@media screen and (min-width: 375px) and (max-width: 1199px)':
                           {
                              height: '80%',
                              width: '8px',
                              transform: 'translate(calc(-50% + 15px), -50%)',
                           },
                     },
                  }}
               >
                  <StatisticCard
                     icon={brandIcon}
                     title="Brand Recognition"
                     desc="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                     alignSelf="flex-start"
                  />
                  <StatisticCard
                     icon={detailedIcon}
                     title="Detailed Records"
                     desc="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                     alignSelf="center"
                  />
                  <StatisticCard
                     icon={fullyIcon}
                     title="Fully Customizable"
                     desc=" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                     alignSelf="flex-end"
                  />
               </Grid>
            </Container>
         </Container>
      </Box>
   );
};

export default Statistics;

/* eslint-disable no-loop-func */
import {
   Box,
   Container,
   Button,
   Input,
   FormControl,
   FormHelperText,
   Stack,
   Typography,
   Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { bgShortenDesktop, bgBoostMobile } from '../../assets/resources';
const MyTextField = styled(Input)(({ theme }) => ({
   backgroundColor: '#fff',
   color: theme.palette.text.primary,
   flex: 1,
   borderRadius: '10px',
   marginRight: '18px',
   height: '63px',
   fontWeight: '500',
   overflow: 'hidden',
   '& input': {
      paddingLeft: '30px',
      paddingRight: '30px',
      [theme.breakpoints.down('sm')]: {
         height: '46px',
      },
   },
   '&.Mui-error': {
      border: `2px solid ${theme.palette.error.main}`,
      '&:after, &:before': {
         display: 'none',
      },
      color: theme.palette.error.main,
   },
   [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      width: '100%',
   },
}));

const CopyButton = styled(Button)(({ theme }) => ({
   borderRadius: '10px',
   paddingRight: '30px',
   paddingLeft: '30px',
   '&.copied': {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
         backgroundColor: theme.palette.secondary.main,
      },
   },
}));

const expression =
   /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
const linkRegex = new RegExp(expression);

const genShortedLink = () => {
   const domain = 'https://rel.ink/';
   const string =
      Math.random().toString(36).substring(2, 5) +
      Math.random().toString(36).substring(2, 5);
   return domain + string;
};

const Shorten = () => {
   const [message, setMessage] = useState(``);
   const [value, setValue] = useState(``);
   const [sortedList, setSortedList] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (value.match(linkRegex)) {
         let shortedLink;
         do {
            shortedLink = genShortedLink();
         } while (sortedList.find((item) => item.shortedLink === shortedLink));
         setSortedList((prev) => [...prev, { link: value, shortedLink }]);
         setValue(``);
      } else {
         setMessage('Please add a link');
      }
   };

   const handleCopy = (e, shortedLink) => {
      const button = e.target;
      button.classList.add('copied');
      button.innerText = 'copied';
      const elem = document.createElement('textarea');
      document.body.appendChild(elem);
      elem.value = shortedLink;
      elem.select();
      document.execCommand('copy');
      document.body.removeChild(elem);
   };
   return (
      <Box
         sx={{
            bgcolor: 'background.paper',
            width: '100%',
            mt: '220px',
            pb: '128px',
         }}
      >
         <Container maxWidth="xl">
            <Box
               sx={{
                  maxWidth: '1110px',
                  padding: '0',
                  m: '0 auto',
                  position: 'relative',
               }}
            >
               <Box
                  width="100%"
                  height={{ xs: '180px', sm: '170px' }}
                  bgcolor="#3a3053"
                  borderRadius={3}
                  sx={{
                     position: 'absolute',
                     top: '0',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     backgroundImage: `url("${bgShortenDesktop}")`,
                     alignItems: 'center',
                     display: 'flex',
                     padding: '0 64px',
                     '@media screen and (min-width: 375px) and (max-width: 599px)':
                        {
                           padding: '0 24px',
                           backgroundImage: `url("${bgBoostMobile}")`,
                        },
                  }}
                  component="form"
                  onSubmit={handleSubmit}
               >
                  <FormControl
                     error={message ? true : false}
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: {
                           xs: 'column',
                           sm: 'row',
                        },
                        flex: 1,
                        position: 'relative',
                     }}
                  >
                     <MyTextField
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Shorten a link here..."
                        inputProps={{
                           onFocus: () => setMessage(``),
                           onChange: () => setMessage(``),
                        }}
                     />
                     <FormHelperText
                        sx={{
                           color: 'error.main',
                           position: 'absolute',
                           top: 'calc(100% + 5px)',
                           fontSize: '16px',
                           fontStyle: 'italic',
                           ml: '3px',
                           '@media screen and (min-width: 375px) and (max-width: 599px)':
                              {
                                 top: '50%',
                                 left: 0,
                                 transform: 'translateY(-50%)',
                                 fontSize: '14px',
                              },
                        }}
                     >
                        {message}
                     </FormHelperText>
                     <Button
                        variant="contained"
                        size="extra"
                        sx={{
                           borderRadius: '10px',
                           '&:hover': {
                              opacity: 1,
                              bgcolor: 'hsl(180, 42%, 78%)',
                           },
                           '@media screen and (min-width: 375px) and (max-width: 599px)':
                              {
                                 width: '100%',
                                 mt: '32px',
                                 p: '9px 40px',
                              },
                        }}
                        type="submit"
                     >
                        Shorten it
                     </Button>
                  </FormControl>
               </Box>
               <Stack pt="110px" direction="column" spacing={2}>
                  {sortedList.reverse().map((item, index) => (
                     <Box
                        key={index}
                        height={{ xs: '156px', sm: '72px' }}
                        p="16px 24px"
                        bgcolor="white"
                        borderRadius={1}
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           '@media screen and (min-width: 375px) and (max-width: 599px)':
                              {
                                 flexDirection: 'column',
                                 alignItems: 'start',
                                 p: 0,
                              },
                        }}
                     >
                        <Typography
                           variant="body1"
                           sx={{
                              '@media screen and (min-width: 375px) and (max-width: 599px)':
                                 {
                                    p: '14px 16px',
                                    fontSize: '15px',
                                    width: '100%',
                                    borderBottom: '1px solid #e5e5e5',
                                 },
                           }}
                        >
                           {item.link}
                        </Typography>
                        <Divider
                           sx={{
                              borderColor: '#e5e5e5',
                           }}
                        />
                        <Typography
                           variant="body1"
                           color="primary"
                           ml="auto"
                           mr={3}
                           sx={{
                              '@media screen and (min-width: 375px) and (max-width: 599px)':
                                 {
                                    m: '14px 16px 10px',
                                    fontSize: '15px',
                                 },
                           }}
                        >
                           {item.shortedLink}
                        </Typography>
                        <CopyButton
                           onClick={(e) => handleCopy(e, item.shortedLink)}
                           variant="contained"
                           sx={{
                              '@media screen and (min-width: 375px) and (max-width: 599px)':
                                 {
                                    m: '0 16px 14px',
                                    flex: 1,
                                    alignSelf: 'stretch',
                                 },
                           }}
                        >
                           Copy
                        </CopyButton>
                     </Box>
                  ))}
               </Stack>
            </Box>
         </Container>
      </Box>
   );
};

export default Shorten;

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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { bgShortenDesktop } from '../../assets/resources';
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
   },
   '&.Mui-error': {
      border: `2px solid ${theme.palette.error.main}`,
      '&:after, &:before': {
         display: 'none',
      },
      color: theme.palette.error.main,
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
   /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
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
         <Container maxWidth="xl" sx={{ position: 'relative' }}>
            <Container maxWidth="contentWidth">
               <Box
                  width={1110}
                  height={170}
                  bgcolor="#3a3053"
                  borderRadius={3}
                  sx={{
                     position: 'absolute',
                     top: '0%',
                     transform: 'translateY(-50%)',
                     backgroundImage: `url("${bgShortenDesktop}")`,
                     alignItems: 'center',
                     display: 'flex',
                     padding: '0 64px',
                  }}
                  component="form"
                  onSubmit={handleSubmit}
               >
                  <FormControl
                     error={message ? true : false}
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
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
                        height="72px"
                        p="16px 24px"
                        bgcolor="white"
                        borderRadius={1}
                        sx={{ display: 'flex', alignItems: 'center' }}
                     >
                        <Typography variant="body1">{item.link}</Typography>
                        <Typography
                           variant="body1"
                           color="primary"
                           ml="auto"
                           mr={3}
                        >
                           {item.shortedLink}
                        </Typography>
                        <CopyButton
                           onClick={(e) => handleCopy(e, item.shortedLink)}
                           variant="contained"
                        >
                           Copy
                        </CopyButton>
                     </Box>
                  ))}
               </Stack>
            </Container>
         </Container>
      </Box>
   );
};

export default Shorten;

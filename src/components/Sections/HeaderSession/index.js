
import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ButtonCustom from '~/components/Button';
import Images from '~/assets/Images';

const title = 'Coffee';
const subtitle = '[kaw-fee] noun';
const description = 'A magical, dark liquid that helps you get through the day.';

function HeaderSession() {

    const isMdScreen = useMediaQuery('(min-width:768px)');

    return ( 
        <Box>
            {/* background */}
            <Box sx={{ position: 'fixed', zIndex: -10, top: 0, left: 0, right: 0 }}>
                <img src={isMdScreen ? Images.mdBackground : Images.xsBackground} alt='background' style={{ width: '100%',  height: '100%' }} />
            </Box>

            {/* section */}
            <Container sx={{ height: '100vh' }}>
                <Stack sx={{ height: '100%' }} justifyContent="center" >
                    <Stack color={isMdScreen ? 'black' : 'white'}>
                        <Typography variant='h2' color={isMdScreen ? 'black' : '#eb8f34'}>{title}</Typography>
                        <Typography variant='h4' sx={{ fontStyle: 'italic' }}>{subtitle}</Typography>
                        <Typography variant='h5' sx={{ mt: 3 }}>{description}</Typography>
                    </Stack>

                    <Stack direction={{ xs: 'column', md: 'row'  }} alignItems="center" sx={{ my: 5 }}>
                        <ButtonCustom 
                            sx={{
                                px: 3, 
                                width: { xs: '100%', md: 'auto' }, 
                                color: '#dbdbc8',
                                borderColor: '#dbdbc8',
                
                                ':hover': { color: 'black', backgroundColor: 'white', borderColor: '#dbdbc8' }
                        }}>
                            <Typography variant='h6'>Enjoy Now</Typography>
                            <ArrowForwardIosIcon />
                        </ButtonCustom>
                        
                    </Stack>
                </Stack>
            </Container>

        </Box>
     );
}

export default HeaderSession;
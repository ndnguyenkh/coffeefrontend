
import { Box, Container, Stack, Typography, Link } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import Images from '~/assets/Images';

const sectionTitles = {
    section_1: 'OUR ESPRESSO, YOUR LATTE',
    section_2: 'OPPORTUNITY',
};

const sectionSubtitles = {
    section_1: 'Dark, rich espresso and steamed milk - perfect alone or with a sweet addition.',
    section_2: 'To be more than an employee, to be a partner.',
};

const buttonTitles = {
    button_1: 'Get yours',
    button_2: 'Join us',
};

const CustomLink = ({ to, children, sx = {}, ...props }) => {

    return <Link
            href={to}
            sx={{ cursor: 'pointer', alignItems: 'center', ml: {xs: 18, md: 0}, ...sx }}
            {...props}
        >
        {children}
    </Link>
}

function BodySession() {
    return ( 
        <Box>
            <Box 
                sx={{ 
                    height: {xs: '100vh', md: '80vh'}, 
                    display: {xs: 'inline-block', md: 'flex'}, 
                    justifyContent: 'space-between', 
                    //background: 'white',

                    backgroundImage: `url(${Images.section_2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    // height: '100%',
                    // filter: 'blur(1px)',
                }}>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {xs: 5, md: 0} }} >
                    <Stack sx={{ width: '460px', height: '380px' }}>
                        <img src={Images.section_1} alt='section_1' style={{ width: '100%', height: '100%' }} />
                    </Stack>
                </Container>
                <Container sx={{ display: 'flex', alignItems: 'center', mt: {xs: 12, md: 0} }}>
                    <Stack sx={{ textAlign: {xs: 'center', md: 'left'} }}>
                        <Typography variant='h5' sx={{ fontWeight: 600, mt: -10, mb: 3 }}>{sectionTitles.section_1}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 500, mb: 5, fontStyle: 'italic', mr: {xs: 0, md: 10} }}>{sectionSubtitles.section_1}</Typography>
                        <CustomLink 
                            to='/register'
                            sx={{ 
                                width: '200px',
                                textDecoration: 'underline',
                                fontSize: '25px',
                                color: 'black',
                                display: 'flex',
                            }}
                        >{buttonTitles.button_1}
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px' }} />
                        </CustomLink>
                    </Stack>
                </Container>
            </Box>
            <Box 
                sx={{ 
                    height: {xs: '100vh', md: '80vh'}, 
                    display: {xs: 'block', md: 'flex'}, 
                    justifyContent: 'space-between', 
                    //
                    backgroundImage: `url(${Images.section_3})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                }}>
                <Container sx={{ display: 'flex', alignItems: 'center', pt: 15, ml: {xs: 0, md: 10} }}>
                    <Stack sx={{ textAlign: {xs: 'center', md: 'left'} }}>
                        <Typography variant='h5' sx={{ fontWeight: 600, mt: -10, mb: 3, color: 'white' }}>{sectionTitles.section_2}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 500, mb: 5, fontStyle: 'italic', mr: {xs: 0, md: 10}, color: '#65686e' }}>{sectionSubtitles.section_2}</Typography>
                        <CustomLink 
                            sx={{ 
                                width: '200px',
                                textDecoration: 'underline',
                                fontSize: '25px',
                                color: '#65686e',
                                display: 'flex',
                            }}
                        >{buttonTitles.button_2} 
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px' }} />
                        </CustomLink>
                    </Stack>
                </Container>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Stack sx={{ width: '460px', height: '380px' }}>
                        <img src={Images.section_4} alt='section_3' style={{ width: '100%', height: '100%' }} />
                    </Stack>
                </Container>
            </Box>
        </Box>
     );
}

export default BodySession;
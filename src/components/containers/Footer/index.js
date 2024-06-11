
import { useState } from 'react';
import { Box, Container, Stack, Typography, Grid, Link, Popper, Paper, Button } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


const CustomButton = ({ children, sx = {} }) => {

    return <Button color='inherit' variant='none' sx={{ py: 4, ":hover": {background: '#ccc'},...sx}}>
        {children}
    </Button>
}

const CustomLink = ({ to, children, popper, sx = {}, ...props }) => {
    const [popperOpen, setPopperOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopperOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setPopperOpen(true);
    };
    
    const handlePopperClose = () => {
        setAnchorEl(null);
        setPopperOpen(false);
    };

    return <>
        <Link to={to}
            color='inherit'  
            sx={{ justifyContent: 'left', textDecoration: 'none', cursor: 'pointer', my: 1, ':hover': {color: '#ccc'},...sx }}
            onMouseEnter={handlePopperOpen}
            onMouseLeave={handlePopperClose}
            {...props}   
        >
                <Typography>{children}</Typography>
        </Link>
        <Popper open={popperOpen} anchorEl={anchorEl} placement="bottom">
            <Paper>
                {/* Nội dung của Popper */}
                <Typography>{popper}</Typography>
            </Paper>
        </Popper>
    </>  
}

function Footer() {

    

    return ( 
        <Box sx={{ margin: 0, padding: 0, height: '65vh' }}>
            <Box sx={{ background: '#ccc', mx: 0, px: 0 }}>
                <Container>
                    <Stack direction={'row'} spacing={3}>
                        <CustomButton>
                            <FacebookOutlinedIcon sx={{ fontSize: 45, ':hover': {color: '#65686e'} }} />
                        </CustomButton>
                        <CustomButton>
                            <InstagramIcon sx={{ fontSize: 45, ':hover': {color: '#65686e'} }} />
                        </CustomButton>
                    </Stack>
                </Container>
            </Box>
            <Box>
                <Container >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 5 }}>
                                <Stack direction={'column'} >
                                    <Typography variant='h6' sx={{ fontWeight: 600, mb: 1, color: '#65686e' }}>ABOUT US</Typography>
                                    <CustomLink popper='Heritage'>Heritage</CustomLink>
                                    <CustomLink popper='Company'>Company</CustomLink>
                                    <CustomLink popper='Career opportunities'>Career opportunities</CustomLink>
                                </Stack>
                                <Stack direction={'column'} sx={{ mx: 2, zIndex: {xs: 1} }}>
                                    <Typography variant='h6' sx={{ fontWeight: 600, mb: 1, color: '#65686e' }}>CUSTOMER SERVICE</Typography>
                                    <CustomLink popper='Frequently Asked Questions'>Frequently Asked Questions</CustomLink>
                                </Stack>
                                <Stack direction={'column'} sx={{ zIndex: {xs: 1} }}>
                                    <Typography variant='h6' sx={{ fontWeight: 600, mb: 1, color: '#65686e' }}>QUICK LINKS</Typography>
                                    <CustomLink popper='Store Locator'>Store Locator</CustomLink>
                                    <CustomLink popper='For Partners'>For Partners</CustomLink>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={{ xs: 0, md: 2 }}>
                            
                        </Grid>
                        <Grid item xs={4} >
                            <Box display="flex" alignItems="flex-end" sx={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                <Typography variant='h4' sx={{ ml: {xs: 0, md: 10}, mb: {xs: 5, md: -30}, display: 'flex' }} >CoffeeIT <span style={{ fontSize: 20 }}>©</span></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Stack>
                        <Typography sx={{ color: '#65686e', textAlign: {xs: 'center', md: 'left'} }}>© 2024 CoffeeIT Company. All Rights Reserved.</Typography>
                    </Stack>
                </Container>
            </Box>
        </Box>
     );
}

export default Footer;
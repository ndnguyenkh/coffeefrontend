
import React from 'react';
import { Box, Container, Stack, Typography, Link, TextField, Checkbox, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ButtonCustom from '~/components/Button';
import Images from '~/assets/Images';

//
const titleLogo = 'CoffeeIT';

const CustomField = ({ label, sx = {}, ...props}) => {
    return <TextField required={true} label={label} variant="outlined" sx={{
        width: '100%',
        my: 1,
        ...sx,
    }} 
    size='small'
    {...props}/>
}

function Register() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return ( 
        <Box sx={{
            backgroundImage: `url(${Images.section_5})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: {xs: '155vh', md: '100vh'},
        }}>
            <Container sx={{ display: {xs: 'block', md: 'flex'}, justifyContent: 'space-between' }}>

                {/* logo */}
                <Box sx={{ margin: {xs: 0, md: 10}, ml: {xs: 10, md: 0}, mb: {xs: 10, md: 0}}}>
                    <Stack direction={"row"} alignItems={'center'}>
                        <img src={Images.logo} alt="logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
                        <Typography variant='h3' textAlign={{ xs: 'center', md: 'left'}} color={'white'} display={{xs: 'none', md: 'block'}}>
                            {titleLogo}
                        </Typography>
                    </Stack>
                    <Box sx={{my: {xs: 0, md: 10}}}>
                        <Typography variant='h3' ><span style={{fontSize: '80px', color: 'green'}}>B</span>ecome a <span style={{color: 'white'}}>CoffeeITer</span> 
                            <FavoriteIcon sx={{fontSize: '60px', color: 'red'}} />
                        </Typography>
                        <Typography variant='h5' sx={{ color: {xs: '#65686e', md: 'white'} }}>Free to use, easy to love</Typography>
                    </Box>
                </Box>

                {/* form */}
                <Box sx={{ width: {xs: 400, md: '450px'}, height: '100vh', background: '#e8e1cf' }}>
                    <Box sx={{ textAlign: 'right' }}>
                        <Link href='/' sx={{color: 'black'}}>
                            <CloseIcon sx={{ m: 2, fontSize: '30px', cursor: 'pointer' }}/>
                        </Link>
                    </Box>
                    
                    <Container>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant='h4'>Sign Up</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right', my: 3 }}>
                            <Typography variant='h6'>
                                Already have an account?
                                <span>
                                    <Link underline="none" sx={{color: 'green', cursor: 'pointer'}} href='/login'>Login</Link>
                                </span>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                            <ButtonCustom sx={{ mr: 1 }}>Facebook
                                <FacebookRoundedIcon sx={{color: 'blue'}} />
                            </ButtonCustom>
                            <ButtonCustom sx={{ ml: 1 }}>Instagram
                                <CenterFocusWeakIcon sx={{color: 'pink'}} />
                            </ButtonCustom>
                        </Box>
                        <Typography variant='h6' sx={{color: 'grey'}} textAlign={'center'}>OR</Typography>
                        <form >
                            <Stack sx={{ mt: 3 }}>
                                <CustomField label={'Email'} />
                                <CustomField label={'Password'} type="password" />
                                <CustomField label={'First name'} />
                                <CustomField label={'Last name'} />
                                <Stack sx={{ textAlign: 'center' }}>
                                    <Typography>By signing up you agree to our <Link>Terms of Service</Link></Typography>
                                    <Typography>and <Link>Privacy Policy</Link></Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Typography>Email me with news and updates</Typography>
                                    </Box>
                                    <Button disabled={checked? false : true} sx={{ background: 'green', color: 'white' }} variant='contained'>Sign Up</Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Container>
                </Box>
            </Container>
        </Box>
     );
}

export default Register;
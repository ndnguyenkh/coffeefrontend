
import { Box, Container, Stack, Typography } from '@mui/material';

import { HOT_COFFEES, COLD_COFFEES } from '~/utils'; 

function SideBar() {
    return ( 
        <Box sx={{ height: "50vh", my: 10, display: {xs: 'none', md: 'block'}}}>
            <Container>
                <Box>
                    <Typography variant='h5' >Drinks</Typography>
                    <Stack>
                        <Typography variant='h6' color={'white'}>Hot Coffee</Typography>
                        <Container>
                            {HOT_COFFEES.map( (data, index) => {
                                return <Typography key={index} color={'#65686e'}>{data.title}</Typography>
                            })}
                        </Container>
                    </Stack>
                    <Stack>
                        <Typography variant='h6' color={'white'}>Cold Coffee</Typography>
                        <Container>
                            {COLD_COFFEES.map( (data, index) => {
                                return <Typography key={index} color={'#65686e'}>{data.title}</Typography>
                            })}
                        </Container>
                    </Stack>
                </Box>
            </Container>
        </Box>
     );
}

export default SideBar;
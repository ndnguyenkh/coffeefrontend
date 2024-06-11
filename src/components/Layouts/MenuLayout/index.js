
import { Box, Container, Grid, useMediaQuery  } from '@mui/material';

import Footer from "~/components/containers/Footer";
import Header from "~/components/containers/Header";
import SideBar from '~/components/containers/SideBar';


function MenuLayout({ children }) {

    const isMdScreen = useMediaQuery('(min-width:768px)');

    return ( 
        <div style={{ background: '#d9c4ad' }}>
            <Header />
            
            <Container sx={{display: 'flex'}}>
                
                <Grid container spacing={2} >
                    <Grid item xs={isMdScreen ? 4 : 0}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={8}>                   
                        {children}
                    </Grid>
                </Grid>
            </Container>
            <div style={{ background: 'white' }}>
                <Footer />
            </div>
        </div>
     );
}

export default MenuLayout;
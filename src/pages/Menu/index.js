
import { Box, Container, Stack, Typography, Grid, Card, CardMedia, useMediaQuery } from '@mui/material';
import { HOT_COFFEES, COLD_COFFEES } from '~/utils';


const CustomCard = ({ image, title }) => {
    
    return (
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          height: "160px",
          mr: 5,
          border: 'none',
          background: "transparent",
        }}
      >
        <Grid container spacing={3} >
            <Grid item xs={6}>
                <CardMedia
                    sx={{ width: '150px', height: "150px", borderRadius: "10px" }}
                    image={image}
                    title={title}
                />
            </Grid>
            <Grid item xs={6}>                   
                <Typography sx={{ width: '90px', padding: 0, margin: 0, mt: 7.5}}>{title}</Typography>                 
            </Grid>
        </Grid>
      </Card>
    );
};

function Menu() {

    const isMdScreen = useMediaQuery('(min-width:768px)');

    return ( 
        <Box sx={{my: 10}}>
            <Typography variant='h4'>Menu</Typography>
            <Container>
                <Box>
                    <Typography variant='h5'>Drinks</Typography>
                    <Container sx={{width: {xs: '350px', md: '100%'}}}>
                        <Typography 
                            variant='h6' 
                            sx={{ mb: 3, color: 'white', textAlign: 'center', borderBottom: '2px solid gray'}}
                        >Hot Coffee</Typography>
                        <Grid container spacing={2} >
                            {HOT_COFFEES.map( (data, index) => {
                                return <Grid key={index} item xs={isMdScreen ? 6 : 12}>
                                    <CustomCard image={data.image} title={data.title} />
                                </Grid>
                            })}
                            
                        </Grid>
                    </Container>
                    <Container sx={{width: {xs: '350px', md: '100%'}}}>
                        <Typography 
                            variant='h6' 
                            sx={{ mb: 3, color: 'white', textAlign: 'center', borderBottom: '2px solid gray'}}
                        >Cold Coffee</Typography>
                        <Grid container spacing={2} >
                            {COLD_COFFEES.map( (data, index) => {
                                return <Grid key={index} item xs={isMdScreen ? 6 : 12}>
                                    <CustomCard image={data.image} title={data.title} />
                                </Grid>
                            })}
                            
                        </Grid>
                    </Container>
                </Box>
            </Container>
        </Box>
     );
}

export default Menu;
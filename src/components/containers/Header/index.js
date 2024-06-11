
import React, {  } from "react";
import { 
  AppBar, 
  Toolbar,
  Typography, 
  Button, 
  Stack, 
  Box, 
  Container, 
  Badge,
} from "@mui/material";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

import Images from "~/assets/Images";
import XSMenu from "~/components/Popper/XSMenu";
import TooltipCustom from "~/components/Tooltip";
import MDMenu from "~/components/Popper/MDMenu";

const title = 'CoffeeIT'; // title logo
const NavigationItems = [
  { title: 'COFFEE' },
  { title: 'MENU' },
  { title: 'ABOUT US' },
  { title: 'FIND OUT MORE' },
];

const CustomButton = ({ children, sx = {}, ...props }) => {
  return <Button
        sx={{ 
          width: '150px',
          height: '40px',
          border: 'none', 
          outline: 'none', 
          color: 'white', 
          ':hover': {background: 'white', color: 'black', border: 'none'}, 
          ...sx 
        }}
        variant="outlined"
        {...props}
    >
    {children}
  </Button>
}

function Header() {

  const userLogin = false;

  return (
    <AppBar sx={{ background: "transparent" }}>
      <Container >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Images.logo} alt="logo" style={{ width: '80px', height: '80px', borderRadius: '50%' }}/>
            <Typography variant='h4' textAlign={{ xs: 'center', md: 'left'}}>
              {title}
            </Typography>
          </Box>

          {/* navigation */}
          {/* <Box sx={{ display: {xs: 'none', md: 'flex'} }}>
            <CustomButton>Coffee</CustomButton>
            <CustomButton>Menu</CustomButton>
            <CustomButton>About Us</CustomButton>
            <CustomButton>Find out more</CustomButton>
          </Box> */}
          <MDMenu />
        
          {/* actions */}
          <Box sx={{ display: {xs: 'none', md: 'flex'} }}>
            <Stack sx={{ width: '30px' }}>
                <TooltipCustom title={'Your Discounts'}>
                  <Button variant="outlined" sx={{ outline: 'none', border: 'none', ':hover': {border: 'none'} }}>
                    <Badge color="error" badgeContent={3} max={99}>
                    <SellOutlinedIcon
                      sx={{
                        ':hover': {color: 'black' },
                        cursor: 'pointer',
                        color: 'white'
                      }} />
                     </Badge>
                  </Button>
                </TooltipCustom>
            </Stack>
            <Stack sx={{ width: '30px', mx: 1 }}>
                <TooltipCustom title={'Your Carts'}>
                  <Button variant="outlined" sx={{ outline: 'none', border: 'none', ':hover': {border: 'none'} }}>
                      <Badge color="error" badgeContent={3} max={99}>
                        <ShoppingCartOutlinedIcon
                        sx={{
                          ':hover': {color: 'black' },
                          cursor: 'pointer',
                          color: 'white'
                        }} />
                     </Badge>
                  </Button>
                </TooltipCustom>
            </Stack>
            {userLogin? (
              <Stack sx={{ width: '30px' }}>
                  <TooltipCustom title='Your Account' >
                    <Button variant="outlined" sx={{ outline: 'none', border: 'none', ':hover': {border: 'none'} }}>
                        <Badge color="error" badgeContent={0}>
                          <AccountBoxOutlinedIcon
                          sx={{
                            ':hover': {color: 'black' },
                            cursor: 'pointer',
                            color: 'white'
                          }} />
                      </Badge>
                    </Button>
                  </TooltipCustom>
              </Stack>
            ) : (
              <></>
            )}
            
          </Box>

          {/* xs menu */}
          <XSMenu NavigationItems={NavigationItems} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}



export default Header;

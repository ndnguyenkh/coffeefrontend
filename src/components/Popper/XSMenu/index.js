
import React, { useState } from "react";
import { Box, Typography, Button, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Link, Stack } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import Popper from "../index";

const title = 'CoffeeIT'; // title logo

function XSMenu({ NavigationItems = [] }) {

  const userLogin = false;

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  

  return (
    <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: '', md: 'none'} }}
          >
            <Button onClick={handleOpenMenu} >
              {!openMenu ? <MenuIcon sx={{ color: 'white' }} /> : <MenuOpenIcon sx={{ color: 'white' }} />}
            </Button>
            <Popper open={openMenu} onClose={handleOpenMenu} >
                <Box sx={{ width: '340px', height: '100vh', background: '#c4bbb9' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>
                      {title}
                      <Button sx={{ ml: 6 }} onClick={handleOpenMenu}>
                        <MenuOpenIcon sx={{ color: 'white' }} />
                      </Button>
                    </Typography>
                    
                  </Box>
                  <Divider />
                  {NavigationItems.map( (item, index) => {
                    return <Box key={index}>
                      <List >
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  })}
                  <Divider />
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ textAlign: 'left' }}>

                        {userLogin ? (
                          <>
                            <LogoutIcon />
                            <ListItemText primary={'Logout'} sx={{ ml: 2 }}/>
                          </>
                           
                        ) : (
                          <>
                            <VpnKeyIcon />               
                            <ListItemText primary={<Link href={'/login'} underline="none" sx={{color: 'black', ':hover': {color: 'white'}}}>Login</Link>} sx={{ ml: 2 }} />
                          </>
                        )}

                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                    <LocalCafeOutlinedIcon sx={{ fontSize: '100px', ':hover': {color: 'white'}, cursor: 'pointer' }} />
                  </Box>
                </Box>
            </Popper>
          </IconButton>
  );
}

export default XSMenu;


import { useState, Fragment } from 'react';
import { Box, Button, Tabs, Tab, Typography, Container } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // bottom arrow down

import TooltipCustom from '~/components/Tooltip';
import Popper from "../index";
import { DATA_TOOLBAR } from '~/utils';
import Coffee from './Coffee';
import FindOutMore from './FindOutMore';
import Menu from './Menu';
import AboutUs from './AboutUs';

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

function MDMenu() {

    const [valueMenu, setValueMenu] = useState('');

    const [openMenu, setOpenMenu] = useState(false);
    function handleOpenMenu(value) {
        setOpenMenu(!openMenu); 
        setValueMenu(value);
    }

    const handleChange = (event, newValue) => {
        setValueMenu(newValue);
    };

    return ( 
        <Box sx={{ display: {xs: 'none', md: 'flex'} }}>
            {DATA_TOOLBAR.map( (data, index) => {
              var Icon = data.icon || Fragment;
              return <CustomButton key={index} onClick={() => handleOpenMenu(data.title)}>{data.title}
                  {Icon}
              </CustomButton>
            })}

            <Popper open={openMenu} onClose={handleOpenMenu}
                anchor='top'
            >
                <Box sx={{  width: '100%', height: '400px', background: '#c4bbb9'}} >

                    {/* navigation panel */}
                    <Tabs value={valueMenu} onChange={handleChange} centered textColor='inherit' indicatorColor='secondary'>
                        {DATA_TOOLBAR.map( (data, index) =>{
                          var Icon = <KeyboardArrowRightIcon />;
                          return <Tab 
                            key={index} 
                            label={<Typography display={'flex'}>{data.title}{valueMenu != data.title ? Icon : <KeyboardArrowDownIcon />}</Typography>}
                            value={data.title} 
                            sx={{mx: 2}}
                          />
                        })}
                    </Tabs>

                    {/* container panel */}
                    <Coffee valueMenu={valueMenu} />
                    <Menu valueMenu={valueMenu} />                   
                    <AboutUs valueMenu={valueMenu} />                             
                    <FindOutMore valueMenu={valueMenu} />

                    {/* actions bottom popper */}
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>  
                        <CustomButton sx={{ mt: 1, color: 'white' }} onClick={() => handleOpenMenu('')}>
                        <TooltipCustom title={'Close'} placement={'top'}>
                          <KeyboardDoubleArrowUpIcon sx={{fontSize: '30px'}}  />
                        </TooltipCustom>
                        </CustomButton>
                    </Container>
                </Box>  
            </Popper>
        </Box>
        
     );
}

export default MDMenu;

import {Box, Container, Stack, Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // bottom

import TooltipCustom from "~/components/Tooltip";

function AboutUs({ valueMenu }) {
  return (
    <Box hidden={valueMenu !== "ABOUT US"}>
      {valueMenu == "ABOUT US" && (
        <Box sx={{ p: 3 }}>
          <Container>
            <Box>             
              <Typography sx={{ display: "flex", cursor: 'pointer' }}>
                  <TooltipCustom title={'Show alls'}>ABOUT US</TooltipCustom>  
                  <KeyboardArrowDownIcon sx={{ transform: "rotate(-50deg)" }} />
              </Typography>              
            </Box>
            <Container sx={{ width: '900px', height: '220px', display: 'flex', justifyContent: 'space-between'}}>
              <Stack sx={{width: '300px'}}>
                <Typography variant="h5" sx={{ mx: 5}}>Heritage</Typography>
              </Stack>
              <Stack sx={{width: '300px'}}>
                <Typography variant="h5" sx={{mx: 5}}>Company</Typography>
                <Box sx={{mx: 5, py: 1}}>
                  <Typography>Mission Statement</Typography>
                  <Typography>Business Ethics and Compliance</Typography>
                  <Typography>Diversity at CoffeeIT</Typography>
                  <Typography>Online Policies</Typography>
                </Box>
              </Stack>
              <Stack sx={{width: '300px'}}>
                <Typography variant="h5" sx={{mx: 5}}>Career Center</Typography>
              </Stack>
            </Container>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default AboutUs;

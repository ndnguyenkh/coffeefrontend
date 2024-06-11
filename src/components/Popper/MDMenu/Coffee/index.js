
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Card,
  CardMedia,
  Grow, 
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // bottom

import { HOT_COFFEES, COLD_COFFEES } from '~/utils';
import TooltipCustom from "~/components/Tooltip";

const CustomCard = ({ image, title }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "90px",
        height: "114px",
        mr: 5,
        border: 'none',
        background: "transparent",
      }}
    >
      <CardMedia
        sx={{ height: "90px", borderRadius: "10px" }}
        image={image}
        title={title}
      />
      <Typography sx={{ width: '90px', padding: 0, margin: 0, textAlign: 'center' }}>{title}</Typography>
    </Card>
  );
};

function Coffee({ valueMenu }) {

  const [checked, setChecked] = useState(!false);

  return (
    <Box hidden={valueMenu !== "COFFEE"}>
      {valueMenu == "COFFEE" && (
        <Box sx={{ p: 2 }}>
          <Container>
            <Box>             
                <Typography sx={{ display: "flex", cursor: 'pointer' }}>
                    <TooltipCustom title={'Show alls'}>COFFEE</TooltipCustom>  
                    <KeyboardArrowDownIcon sx={{ transform: "rotate(-50deg)" }} />
                </Typography>              
            </Box>
            <Container sx={{ mx: 10 }}>
              <Stack direction={"row"}>
                <Typography variant="h6" color={'#65686e'}>Hot Coffees</Typography>
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1200 } : {})}
                >
                  <Box sx={{ mx: 5, display: "flex" }}>                
                    {HOT_COFFEES.map( (data, index) => {
                      return <CustomCard key={index} image={data.image} title={data.title} />
                    })}                    
                  </Box>
                </Grow>
              </Stack>
              <Stack direction={"row"} sx={{ mt: 2 }}>
                <Typography variant="h6" color={'#65686e'}>Cold Coffees</Typography>
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1200 } : {})}
                >
                  <Box sx={{ mx: 4, display: "flex" }}>
                    {COLD_COFFEES.map( (data, index) => {
                      return <CustomCard key={index} image={data.image} title={data.title} />
                    })}
                  </Box>
                </Grow>
              </Stack>
            </Container>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default Coffee;

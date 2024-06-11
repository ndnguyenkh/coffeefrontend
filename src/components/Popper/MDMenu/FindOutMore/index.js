
import { useRef, useState } from "react";
import {Box, Typography, Container, Slide, Zoom  } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // bottom

import TooltipCustom from "~/components/Tooltip";
import ButtonCustom from "~/components/Button";

function FindOutMore({ valueMenu }) {

  const [checked, setChecked] = useState(!false);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <Box hidden={valueMenu !== "FIND OUT MORE"}>
      {valueMenu == "FIND OUT MORE" && (
        <Box sx={{ p: 3 }}>
          <Container>
            <Box>             
                <Typography sx={{ display: "flex", cursor: 'pointer' }}>
                    <TooltipCustom title={''}>FIND OUT MORE</TooltipCustom>  
                    <KeyboardArrowDownIcon sx={{ transform: "rotate(-50deg)" }} />
                </Typography>              
            </Box>
            <Box sx={{ mx: 20, mt: 2 }}>

                <Slide in={checked} container={containerRef.current}>
                  <Typography>COFFEE ARTICLES</Typography>
                </Slide>

                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "400ms" : "0ms" }}
                >
                  <Typography variant="h2" sx={{mt: 1}}>Welcome to all things coffee</Typography>
                </Zoom>

                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                  <Typography variant="h6" sx={{mt: 2}}>
                      Have you found your favourite CoffeeIT® at home product? 
                      Why not expand your understanding of all things coffee. 
                      Grab a cup of coffee and enjoy our content on the coffee journey, 
                      craft, sustainability, and lifestyle.
                  </Typography>
                </Slide>
                
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "800ms" : "0ms" }}
                >
                  <Container sx={{display: 'flex', justifyContent: 'center'}}>
                    <ButtonCustom sx={{ml: 50}}>Show alls</ButtonCustom>
                  </Container>
                </Zoom>
                
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default FindOutMore;

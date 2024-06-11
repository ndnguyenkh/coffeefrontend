import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Zoom,
  InputBase,
  Divider,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // bottom
import SearchIcon from "@mui/icons-material/Search";

import TooltipCustom from "~/components/Tooltip";

const DATA_KEYWORDS = [
  { title: "Hot Coffee" },
  { title: "Cold Coffee" },
  { title: "Cookie" },
  { title: "Chocolate" },
];

function Menu({ valueMenu }) {
  const [checked, setChecked] = useState(!false);

  const [value, setValue] = useState("");
  const [keywords, setKeywords] = useState(DATA_KEYWORDS);

  const handlePushValue = () => {
    // console.log(value);
    if (value) {
      const newKeyword = { title: value };
      setKeywords([...keywords, newKeyword]);
      setValue("");
    }
  };

  return (
    <Box hidden={valueMenu !== "MENU"}>
      {valueMenu == "MENU" && (
        <Box sx={{ p: 3 }}>
          <Container>
            <Box>
              <Typography sx={{ display: "flex", cursor: "pointer" }}>
                <TooltipCustom title={"Show alls"}>MENU</TooltipCustom>
                <KeyboardArrowDownIcon sx={{ transform: "rotate(-50deg)" }} />
              </Typography>
            </Box>
            <Container>
              <Box sx={{ height: 180 }}>
                <Box sx={{ display: "block" }}>
                  <Zoom
                    in={checked}
                    style={{ transitionDelay: checked ? "400ms" : "0ms" }}
                  >
                    <Paper
                      component="form"
                      sx={{
                        height: "50px",
                        mx: 20,
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "30px",
                      }}
                    >
                      <InputBase
                        sx={{
                          width: "100%",
                          height: "100%",
                          px: 4,
                          flex: 1,
                          color: "#65686e",
                        }}
                        placeholder="Search..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={handlePushValue}
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </Zoom>
                  <Zoom
                    in={checked}
                    style={{ transitionDelay: checked ? "800ms" : "0ms" }}
                  >
                    <Container
                      sx={{
                        maxWidth: "150px",
                        mx: 18,
                        mt: 2,
                        display: "block",
                      }}
                    >
                      <Typography>Searched recently</Typography>
                      <Box
                        sx={{
                          maxWidth: "800px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {keywords.map((data, index) => {
                          return (
                            <Paper
                              key={index}
                              component="form"
                              sx={{
                                m: 1,
                                width: "140px",
                                height: 30,
                                background: "transparent",
                                border: "none",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              elevation={4}
                            >
                              <Typography>{data.title}</Typography>
                            </Paper>
                          );
                        })}
                      </Box>
                    </Container>
                  </Zoom>
                </Box>
              </Box>
            </Container>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default Menu;

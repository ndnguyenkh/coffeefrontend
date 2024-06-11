
import {Box,  } from "@mui/material";
import BodySession from "~/components/Sections/BodySession";
import HeaderSession from "~/components/Sections/HeaderSession";

function Home() {
    return ( 
        <Box>
            {/* Home Pages */}
            <HeaderSession />
            <BodySession />
        </Box>
     );
}

export default Home;
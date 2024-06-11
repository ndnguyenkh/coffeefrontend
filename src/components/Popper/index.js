
import { Drawer } from '@mui/material';

function Popper({ children, sx = {}, ...props }) {

    

    return ( 
        <Drawer 
            
            sx={{
                width: '100%',

                ...sx
            }}
            {...props}
        >
            {children}
        </Drawer>
     );
}

export default Popper;
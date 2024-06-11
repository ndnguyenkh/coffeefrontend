
import { Button } from '@mui/material';

function ButtonCustom({ 
    width, 
    
    sx = {}, 
    variant = 'outlined', 
    children, 
    ...props 
}) {
    return ( 
        <Button variant={variant} 
            sx={{ 
                width: width || '200px',
                outline: 'none',
                borderRadius: '5px',
                borderColor: 'black',
                color: 'black',
                ':hover': {borderColor: 'black'},
                ...sx 
            }} 
            {...props} 
        >
            {children}
        </Button>
     );
}

export default ButtonCustom;
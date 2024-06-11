
import Tooltip from '@mui/material/Tooltip';

function TooltipCustom({ title, placement, sx = {}, children, ...props }) {
    return ( 
        <Tooltip 
            title={title}
            placement={placement || 'bottom'}
            sx={{  ...sx}}
            disableInteractive
            {...props}
        >
            {children}
        </Tooltip>
     );
}

export default TooltipCustom;
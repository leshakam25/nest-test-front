import React from 'react';
import {Typography} from "@mui/material";

const Title = ({label}) => {
    return (
        <Typography variant={'h4'} sx={{mb:4}}>
            {label}
        </Typography>
    );
};

export default Title;
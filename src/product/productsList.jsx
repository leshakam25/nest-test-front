import React from 'react';
import {Box, Button, Typography} from "@mui/material";

const ProductsList = () => {
    return (
        <Box sx={{
            width: '100%',
        }}>
            <Typography variant={'h4'}>
                Список товаров
            </Typography>
            <Button
                fullwidth
                variant={'contained'} >
                Получить список
            </Button>
        </Box>
    );
};

export default ProductsList;
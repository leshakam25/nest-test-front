import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import Title from "../shared/components/title.jsx";

const ProductsList = () => {
    return (
        <Box>
            <Title label={'Список товаров'}/>
            <Button
                fullwidth
                variant={'contained'} >
                Получить список
            </Button>
        </Box>
    );
};

export default ProductsList;
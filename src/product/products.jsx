import React from 'react';
import { Box, Container} from "@mui/material";
import CreateProduct from "./createProduct.jsx";
import ProductsList from "./productsList.jsx";

const Products = () => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
            gap: 1
        }}>
            <Box sx={{
                maxWidth: 600
            }}>
                <CreateProduct/>
            </Box>
            <Box sx={{
                maxWidth:600
            }}>
                <ProductsList/>
            </Box>
        </Container>
    );
};

export default Products;
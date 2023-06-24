import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {ExpandMore} from "@mui/icons-material";
import CreateProduct from "./createProduct.jsx";
import ProductsList from "./productsList.jsx";

const Products = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
    }
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
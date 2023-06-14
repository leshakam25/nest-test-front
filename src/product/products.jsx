import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {ExpandMore} from "@mui/icons-material";
import CreateProduct from "./createProduct.jsx";

const Products = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
    }
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: 1
        }}>
            <Box sx={{
                maxWidth:600
            }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>
                            Создать продукт
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>создание продукта с различными
                            параметрами</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CreateProduct/>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
};

export default Products;
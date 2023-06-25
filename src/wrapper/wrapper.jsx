import React from 'react';
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import CreateProduct from "../product/createProduct.jsx";
import ProductList from "../product/productList.jsx";

const Wrapper = () => {
    return (
        <Container maxWidth={'xl'} sx={{my: 8}}>
            <Routes>
                <Route path="/createproduct" element={<CreateProduct/>}/>
                <Route path="/listproducts" element={<ProductList/>}/>
            </Routes>
        </Container>
    );
};

export default Wrapper;
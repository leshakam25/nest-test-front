import React from 'react';
import {Container} from "@mui/material";
import Products from "../product/products.jsx";
import {Route, Routes} from "react-router-dom";
import Auth from "../auth/auth.jsx";
import Login from "../auth/login.jsx";
import Register from "../auth/register.jsx";
import CreateProduct from "../product/createProduct.jsx";
import ProductsList from "../product/productsList.jsx";

const Wrapper = () => {

    return (
        <Container maxWidth={'xl'} sx={{my: 8}}>
            <Routes>
                <Route path="/createproduct" element={<CreateProduct/>}/>
                <Route path="/listproducts" element={<ProductsList/>}/>
            </Routes>
        </Container>
    );
};

export default Wrapper;
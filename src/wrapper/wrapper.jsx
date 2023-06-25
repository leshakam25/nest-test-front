import React from 'react';
import { Container} from "@mui/material";
import Products from "../product/products.jsx";

const Wrapper = () => {

    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: 1
        }}>
          <Products/>
        </Container>
    );
};

export default Wrapper;
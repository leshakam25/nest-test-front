import React from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Auth from "../auth/auth.jsx";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: 60,
                bgcolor: "lightgray",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2
            }}
        >
            <Auth/>
        </Box>
    );
};

export default Header;
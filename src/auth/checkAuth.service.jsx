import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";


const checkAuthService = () => {
    const navigate = useNavigate()

    useEffect((navigate) => {
        const accessToken = localStorage.getItem("access_token")
        if (!accessToken) {
            return navigate('/auth')
        }
        if (accessToken) {
            return navigate('/wrapper')
        }
    }, []);

    // if (!localStorage.getItem("access_token")) {
    //     return navigate('/auth')
    // }
    // if (localStorage.getItem("access_token")) {
    //     return navigate('/wrapper')
    // }
};

export default checkAuthService;
import Wrapper from "./wrapper/wrapper.jsx";
import 'normalize.css'
import {Route, Routes} from "react-router-dom";
import Login from "./auth/login.jsx";
import Auth from "./auth/auth.jsx";
import Register from "./auth/register.jsx";
import Products from "./product/products.jsx";
import checkAuthService from "./auth/checkAuth.service.jsx";
import {useEffect} from "react";



function App() {

    // useEffect(() => {
    //     checkAuthService()
    // }, [])

    return (
        <Routes>
            <Route path="/" element={<Wrapper/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    )
}

export default App

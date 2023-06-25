import Wrapper from "./wrapper/wrapper.jsx";
import 'normalize.css'
import {Route, Routes} from "react-router-dom";
import Login from "./auth/login.jsx";
import Auth from "./auth/auth.jsx";
import Register from "./auth/register.jsx";
import Products from "./product/products.jsx";
import Header from "./header/header.jsx";
import CreateProduct from "./product/createProduct.jsx";
import ProductsList from "./product/productsList.jsx";

function App() {
    return (
        <>
            <Header/>
            <Wrapper/>
        </>
    )
}

export default App

import Wrapper from "./wrapper/wrapper.jsx";
import 'normalize.css'
import {Route, Routes} from "react-router-dom";
import Login from "./auth/login.jsx";
import Auth from "./auth/auth.jsx";
import Register from "./auth/register.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App

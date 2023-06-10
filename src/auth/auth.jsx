import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Wrapper from "../wrapper/wrapper.jsx";

const Auth = () => {
    let navigate = useNavigate();
    let accessToken = localStorage.getItem("accessToken");
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: 1
        }}>
            {!accessToken && (
                <Box>
                    <Button fullwidth variant={'contained'} onClick={() => navigate('/login')}>Вход</Button>
                    <Button fullwidth variant={'contained'} onClick={() => navigate('/register')}>Регистрация</Button>
                </Box>
            )}
            { accessToken && <Wrapper/>}

        </Container>
    )
};

export default Auth;
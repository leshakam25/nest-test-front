import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

let url = import.meta.env.VITE_REACT_APP_BASEURL;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: null,
        error: null
    },
    reducers: {
        authorize(state, action) {
            axios
                .post(`${url}/auth/login`,
                    {
                        login: action.payload.login,
                        password: action.payload.password
                    }
                )
                .then(function (response) {
                    alert("Success");
                    localStorage.setItem("access_token", response.data.access_token);
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        },
        register(state, action) {
            axios
                .post(`${url}/auth/register`,
                    {
                        login: action.payload.login,
                        password: action.payload.password
                    }
                )
                .then(function () {
                    alert("Success");
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        }
    }
})

export const { authorize, register } =
    authSlice.actions;
export default authSlice.reducer;
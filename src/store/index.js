import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import productSlice from "./productSlice.js";

export default configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice
    }
})
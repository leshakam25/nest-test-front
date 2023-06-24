import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        state: [],
        status: null,
        error: null
    },
    reducers: {
        createProduct(state, action) {
            axios
                .post('http://45.146.166.147:3000/api/product/create',
                    {
                        image: action.payload.data.image,
                        title: action.payload.data.title,
                        price: action.payload.data.price,
                        oldPrice: action.payload.data.oldPrice,
                        credit: action.payload.data.credit,
                        description: action.payload.data.description,
                        advantages: action.payload.data.advantages,
                        disAdvantages: action.payload.data.disAdvantages,
                        categories: action.payload.data.categories,
                        tags: action.payload.data.tags,
                        // characteristics: action.payload.data.characteristics,
                    },
                    {headers: action.payload.headers}
                )
                .then(function (response) {
                    alert("Success");
                    localStorage.setItem("access_token", response.data.access_token);
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        }
    }
})

export const {createProduct} = productSlice.actions;
export default productSlice.reducer;
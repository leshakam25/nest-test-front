import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import Title from "../shared/components/title.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {findProduct} from "../store/productSlice.js";
import axios from "axios";

const ProductList = () => {
    let listSelector = useSelector((state) => state.product.state);
    const [list, setList] = useState();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        setList(dispatch(findProduct({data})))
        console.log("list", list)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: 400
                }}
            >
                <Title label={'Список товаров'}/>
                <TextField
                    fullWidth
                    variant={'filled'}
                    {...register('category')}
                    label={'Введите категорию'}
                    size={'small'}
                />
                <TextField
                    fullWidth
                    variant={'filled'}
                    label={'Лимит отображения'}
                    {...register('limit')}
                    size={'small'}
                />
                <Button
                    type={'submit'}
                    size={'large'}
                    variant={'contained'}>
                    Получить список
                </Button>
            </Box>
        </form>
    );
};

export default ProductList;
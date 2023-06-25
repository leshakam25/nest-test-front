import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import Title from "../shared/components/title.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {findProduct} from "../store/productSlice.js";

const ProductsList = () => {
    const listSelector = useSelector((state) => state.product.state);
    const [list, setList] = useState();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        dispatch(findProduct({data}))
        setList()
        // console.log("list", list)
        console.log("listSelector", listSelector)
    }
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Title label={'Список товаров'}/>
                    <TextField
                        variant={'filled'}
                        {...register('category')}
                        placeholder="Введите категорию"
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('limit')}
                        placeholder="Лимит отображения"
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
        </Box>
    );
};

export default ProductsList;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: null,
    loading: false,
    errorMsg: null
}

export const fetchInterestedProducts = createAsyncThunk("products/fetchInterestedProducts", async() => {
    try {
        const url = `https://fakestoreapi.com/products?limit=4`
        const response = await axios.get(url)
        const data = await response.data
        return data
    } catch (error) {
        return Promise.reject(error.response.data)
    }
})

const interestedProductsSlice = createSlice({
    name: "interestedProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInterestedProducts.pending, (state) => {
                state.loading = true
                state.errorMsg = null
                state.products = null
            })
            .addCase(fetchInterestedProducts.fulfilled, (state,action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchInterestedProducts.rejected, (state, action) => {
                state.products = null
                state.loading = false
                state.errorMsg = action.error.message
            })
    }
})

export const productsLoading = (state) => state.interestedProducts.loading
export const errorMsg = (state) => state.interestedProducts.errorMsg
export const products = (state) => state.interestedProducts.products
export default interestedProductsSlice.reducer
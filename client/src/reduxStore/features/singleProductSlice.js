import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    item: null,
    loading: false,
    error : null
}

export const fetchItem = createAsyncThunk("item/fetchItem", async(paramsObj) => {
    const {id} = paramsObj
    const url = `https://fakestoreapi.com/products/${id}`
    try {
        const response = await axios.get(url)
        const data = response.data
        return data
    } catch (error) {
        return Promise.reject(error.response.data)
    }
})

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder
                .addCase(fetchItem.pending, (state) => {
                    state.error = null
                    state.loading = true
                })
                .addCase(fetchItem.fulfilled, (state,action) => {
                    state.error = null
                    state.loading = false
                    state.item = action.payload
                })
                .addCase(fetchItem.rejected, (state,action) => {
                    state.item = null
                    state.loading = false
                    state.error = action.error.message
                })
    }
})

export const item = (state) => state.singleProduct.item
export const singleProductLoading = (state) => state.singleProduct.loading
export const singleProductError = (state) => state.singleProduct.error
export default singleProductSlice.reducer
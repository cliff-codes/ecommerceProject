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
        return response
    } catch (error) {
        
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
                    state.item = action.payload
                })
                .addCase(fetchItem.rejected, (state,action) => {
                    state.error = action.error.message
                })
    }
})

export const item = (state) => state.singleProduct.item
export const singleProductLoading = (state) => state.singleProduct.loading
export const singleProductError = (state) => state.singleProduct.error
export default singleProductSlice.reducer
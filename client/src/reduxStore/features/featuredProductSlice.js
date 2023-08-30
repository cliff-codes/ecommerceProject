import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
   data: null,
   loading: false,
   error: null
}

export const fetchFeaturedProducts = createAsyncThunk('products/fetchFeaturedProducts', async() => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=5")
        const data = await response.data
        console.log(data)
        return data
    } catch (error) {
        return error
    }
})

const featuredProductSlice = createSlice({
    name: "featuredProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeaturedProducts.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
                state.loading = false,
                state.data = action.payload
            })
            .addCase(fetchFeaturedProducts.rejected, (state) => {
                state.loading = false,
                state.error = action.error.message
            })
    }
})

export const apiData = (state) => state.featuredProducts.data
export const apiLoadingState = (state) => state.featuredProducts.loading
export const apiErrorState = (state) => state.featuredProducts.error
export default featuredProductSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (obj) => {
      try {
        console.log('Function is working');
        const { productName } = obj;
        const response = await fetch('http://localhost:4000/marketplace/api/v1/search', {
          method: 'POST', // Changed to POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productName }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json()
        return data;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error to be caught by Redux Toolkit
      }
    }
  );
  

// Create a slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    searchItem: '',
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    passSearchItem : (state, action) => {
        state.searchItem = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const reqStatus = (state) => state.search.status
export const data = (state) => state.search.products
export const searchValue = (state) => state.search.searchItem
export const {passSearchItem} = productsSlice.actions
export default productsSlice.reducer;

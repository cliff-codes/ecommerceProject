import {configureStore} from "@reduxjs/toolkit"
import featuredProductsReducer from './features/featuredProductSlice'

export const store = configureStore({
    reducer: {
        featuredProducts: featuredProductsReducer
    }
})
import {configureStore} from "@reduxjs/toolkit"
import featuredProductsReducer from './features/featuredProductSlice'
import singleProductReducer from "./features/singleProductSlice"
import interestedProductsReducer from "./features/interestedProductsSlice"

export const store = configureStore({
    reducer: {
        featuredProducts: featuredProductsReducer,
        singleProduct: singleProductReducer,
        interestedProducts: interestedProductsReducer
    }
})
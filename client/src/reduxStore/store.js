import {combineReducers, configureStore} from "@reduxjs/toolkit"
import featuredProductsReducer from './features/featuredProductSlice'
import singleProductReducer from "./features/singleProductSlice"
import interestedProductsReducer from "./features/interestedProductsSlice"
import cartReducer from "./features/cartSlice"
import { api } from "./features/shopNowSlice"
import { categoryApi } from "./features/categorySlice"


import storage from "redux-persist/es/storage"
import {persistReducer, persistStore} from "redux-persist"
import thunk from "redux-thunk"
// import { authApi } from "./features/authSlice"

const persistConfig = {
    key: "root",
    storage, 
    // blacklist: ['featuredProducts', 'singleProduct' , 'interestedProducts',api.reducerPath]
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    featuredProducts: featuredProductsReducer,
    singleProduct: singleProductReducer,
    interestedProducts: interestedProductsReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    // [authApi.reducerPath]: authApi.reducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(api.middleware)
})


export const persistor = persistStore(store)
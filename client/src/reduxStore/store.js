import {combineReducers, configureStore} from "@reduxjs/toolkit"
import featuredProductsReducer from './features/featuredProductSlice'
import singleProductReducer from "./features/singleProductSlice"
import interestedProductsReducer from "./features/interestedProductsSlice"
import cartReducer from "./features/cartSlice"

import storage from "redux-persist/es/storage"
import {persistReducer, persistStore} from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
    key: "root",
    storage, 
    blacklist: ['featuredProducts', 'singleProduct' , 'interestedProducts']
}

const rootReducer = combineReducers({
    featuredProducts: featuredProductsReducer,
    singleProduct: singleProductReducer,
    interestedProducts: interestedProductsReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
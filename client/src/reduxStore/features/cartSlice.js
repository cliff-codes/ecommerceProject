import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity: 0,
    isLoading: false,
    errorMsg: null
}

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        increaseQuantity: (state) => {
            state.quantity += 1
        },
        decreaseQuantity: (state) => {
            if (state.quantity > 0){
                state.quantity -= 1
            }
        },
        addToCart: {
            reducer(state,action){
                state.cartItems.push(action.payload)
            },
            prepare(id,title,price,quantity,image){
                return {
                    id,
                    cartId: nanoid(4),
                    title,
                    price,
                    quantity,
                    image
                }
            }
        }
    },
    extraReducers: () => {

    }
})

export const quantityInCart = (state) => state.cartItems.quantity
export const itemsInCart = (state) => state.cartItems.cartItems
export const loading = (state) => state.cartItems.isLoading
export const errorMessage = (state) => state.cartItems.errorMsg

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer

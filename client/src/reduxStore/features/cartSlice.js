import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [],
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
               state.items.push(action.payload)
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
    }
})

export default cartSlice.reducer
export const {addToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions

export const quantityInCart = (state) => state.cart.quantity
export const itemsInCart = (state) => state.cart.items
export const loading = (state) => state.cart.isLoading
export const errorMessage = (state) => state.cart.errorMsg


//export const item = (state) => state.singleProduct.item
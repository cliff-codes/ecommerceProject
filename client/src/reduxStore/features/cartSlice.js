import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    errorMsg: null
}

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = []
        },
        increaseQunatity: (id,state) => {
            const item = state.items.filter(item => item.cartId === id ? item : null)
            if(item){
                item.quantity += 1
            }
        }
        ,
        // findItem: (state,action) => {
            
        // },
        findItemAndIncrease: (state, action) => {
            const idToFind = action.payload; // Assuming action.payload is the ID to find
            const item = state.items.find(el => el.cartId === idToFind);
            if (item) {
                // If item exists, you can update its properties
                item.quantity += 1;
            }
        },
        findItemAndDecrease: (state, action) => {
            const idToFind = action.payload; // Assuming action.payload is the ID to find
            const item = state.items.find(el => el.cartId === idToFind)
            if (item) {
                // If item exists, you can update its properties
                item.quantity -= 1;
            }
        },
        deleteItem: (state, action) => {
            const idToFind = action.payload; 
            state.items = state.items.filter(el => el.cartId !== idToFind ? el : null);
        },
        addToCart: {
            reducer(state,action){
               state.items.push(action.payload)
            },
            prepare(id,title,price,quantity,image){
                return {
                    payload: {
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
    }
})

export default cartSlice.reducer
export const {addToCart,clearCart,increaseQunatity, findItemAndIncrease, findItemAndDecrease, deleteItem} = cartSlice.actions
export const itemsInCart = (state) => state.cart.items
export const loading = (state) => state.cart.isLoading
export const errorMessage = (state) => state.cart.errorMsg



//export const item = (state) => state.singleProduct.item
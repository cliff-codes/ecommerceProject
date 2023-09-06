import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { itemsInCart, clearCart } from '../src/reduxStore/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsList from '../src/reduxStore/features/CartItemsList'


const CartPage = () => {
  const cartItems = useSelector(itemsInCart)
  const dispatch = useDispatch()
  return (
    <Box flexGrow={1} display={"flex"} flexDirection={"column"} gap={'16px'} marginTop={"32px"}>
        <Typography>Your Cart</Typography>
        <Box marginBottom={"32px"}>
          {
            cartItems.length < 1 ? <Typography>your cart is empty :(</Typography>:
            <Box>
              {cartItems.map(item => (
                <CartItemsList key={item.id} item={item}/>
              ))}
            </Box>
          }
          {
            cartItems.length > 0 ? <Button onClick={() => dispatch(clearCart())} sx={{color: "black", border: "1px solid black"}}>Clear Cart</Button> : null
          }
        </Box>
    </Box>
  )
}

export default CartPage
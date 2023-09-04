import { Box, Typography } from '@mui/material'
import React from 'react'
import { itemsInCart } from '../src/reduxStore/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsList from '../src/reduxStore/features/CartItemsList'


const CartPage = () => {
  const cartItems = useSelector(itemsInCart)
  console.log(cartItems[0])
  return (
    <Box flexGrow={1}>
        <Typography>Your Cart</Typography>
        <Box>
          {
            cartItems.length < 1 ? <Typography>your cart is empty :(</Typography>:
            <Box>
              {cartItems.map(item => (
                console.log(item)
              ))}
            </Box>
          }
          
        </Box>
    </Box>
  )
}

export default CartPage
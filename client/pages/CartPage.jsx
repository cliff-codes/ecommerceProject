import { Box, Typography } from '@mui/material'
import React from 'react'
import { itemsInCart } from '../src/reduxStore/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


const CartPage = () => {
  const cartItems = useSelector(itemsInCart)
  console.log(cartItems[0])
  return (
    <Box flexGrow={1}>
        <Typography>Your Cart</Typography>
        <Box>
          <Typography>{cartItems.length}</Typography>
          
        </Box>
    </Box>
  )
}

export default CartPage
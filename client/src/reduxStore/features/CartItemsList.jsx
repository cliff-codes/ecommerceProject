import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CartItemsList = ({item}) => {
  return (
        <>
            {item ? console.log("Item is ready") : console.log("item is not ready")}
        </>
    //    <Box key={item.id}>
    //         <Box sx  = {{width: "100px", height: "100px", background: `url(${item.image})`}}></Box>
    //         <Box>
    //             <Typography>{item.title}</Typography>
    //             <Typography>{`$${item.price}`}</Typography>
    //         </Box>
    //         <Box>
    //             <Typography>{item.quantity}</Typography>
    //             <Box display={"flex"} gap={"16px"} justifyContent={"center"} alignItems={"center"}>
    //                     <Button variant='outlined' sx={{
    //                         border: "1px solid black",
    //                         color: "black",
    //                         transition: "all .1s ease",
    //                         "&:hover": {
    //                             background: "black",
    //                             color: "white",
    //                             border: "none"
    //                         }
    //                     }}>-</Button>
    //                     <Box>{item.quantity}</Box>
    //                     <Button variant='outlined' sx={{
    //                         border: "1px solid black",
    //                         color: "black",

    //                         transition: "all .1s ease",
    //                         "&:hover": {
    //                             background: "black",
    //                             color: "white",
    //                             border: "none"
    //                         }
    //                     }} >+</Button>
    //                 </Box>
    //         </Box>
    //    </Box>
  )
}

export default CartItemsList
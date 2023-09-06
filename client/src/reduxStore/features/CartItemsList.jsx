import { Box, Container, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import {findItemAndDecrease, findItemAndIncrease} from "./cartSlice"
import { useDispatch } from 'react-redux'


const CartItemsList = ({item}) => {
  const [counter,setCounter] = useState(item.quantity)

  const dispatch = useDispatch()

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  return (
        <Container key={item.id} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box  display={"flex"} alignItems={"center"} gap={"16px"} marginBottom={"20px"} padding={'16px'} borderRadius={"5px"} sx={{
                  "&:hover":{
                    background: "#d3d3d3"
                  }
                }}>
                     <Box sx  = {{width: "100px", height: "100px", background: `url(${item.image})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></Box>
                     <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                         <Typography maxWidth={"150px"}>{item.title}</Typography>
                         <Typography fontWeight={"600"}>{`$${item.price}`}</Typography>
                     </Box>
                     <Box>
                         <Box display={"flex"} gap={"8px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                 <Button variant='outlined' sx={{
                                    border: "1px solid black",
                                    height: "30px",
                                    color: "black",
                                    transition: "all .1s ease",
                                    "&:hover": {
                                        background: "black",
                                        color: "white",
                                        border: "none"
                                    }
                                }} onClick={() => {
                                  if(counter > 0){
                                    decreaseCounter()
                                    dispatch(findItemAndDecrease(item.cartId))
                                  }
                                }}>-</Button>
                                <Box>{counter}</Box>
                                <Button variant='outlined' sx={{
                                    border: "1px solid black",
                                    color: "black",
                                    height: "30px",
                                    transition: "all .1s ease",
                                    "&:hover": {
                                        background: "black",
                                        color: "white",
                                        border: "none"
                                    }
                                }} onClick={() => {
                                    increaseCounter()
                                    dispatch(findItemAndIncrease(item.cartId))
                                  }} >+</Button>
                            </Box>
                    </Box>
               </Box>
        </Container>
  )
}

export default CartItemsList
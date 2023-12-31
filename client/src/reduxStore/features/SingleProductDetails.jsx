import { Box, Button, ButtonBase, Card, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsInCart, addToCart, findItemAndIncrease, findItemAndDecrease} from './cartSlice'


const SingleProductDetails = ({item}) => {
    const dispatch = useDispatch()
    const {image, price, title, description, id} = item

    
    const [counter,setCounter] = useState(1)

    const increaseCounter = () => {
        setCounter(counter + 1)
        dispatch(findItemAndIncrease(item.id))
    }

    const decreaseCounter = () => {
        if(counter > 1){
            setCounter(counter - 1)
            findItemAndDecrease(item.id)
        }
    }

    //checking if the item is already in cart
    const cartItems = useSelector(itemsInCart)
    const cartItem = cartItems.filter(el => el.id === item.id ? el : null)
    
    const cartBtn = () => {
        if(cartItem.length > 0){
            return <>
                <ButtonBase sx={{font: "inherit", background: "#D3D3D3",p:"8px",color:"white", borderRadius:"5px"}}>Added to cart</ButtonBase>
            </>
        }
        return <>
             <Button sx={{textTransform: "lowercase", color: "black", border: "1px solid black", transition: "all .1s ease",
                                "&:hover": {
                                    background: "black",
                                    color: "white",
                                }}} onClick={() => {
                                    if(counter > 0){
                                        dispatch(addToCart(id,title,price,counter,image))
                                    }
            }}>Add to cart</Button>
        </>
    }

    //specifying which counter value to show
    const counterValue = () => {
        if(cartItem.length > 0){
            
        }
    }

  return (
    <Container sx={{marginTop: "32px"}}>
        <Grid container justifyContent={"center"} spacing={3}>
            <Grid item>
                <Card sx={{height: "200px", width: "250px", boxShadow: "none"}}>
                    <img height={"auto"} width={"100%"} src= {`${image}`} />
                </Card>
            </Grid>
            <Grid item>
                <Box display={"flex"} flexDirection = {"column"} gap = {"8px"}>
                    <Box display={"flex"} gap={"8px"} justifyContent={"space-between"}><Typography fontWeight={"600"} marginBottom={"8px"} maxWidth={"220px"} textAlign={"left"}>{title}</Typography>
                    <Typography fontWeight={"600"}>{`$${price}`}</Typography></Box>

                    <Typography textAlign={"left"} maxWidth={"300px"}>{description}</Typography>

                    {
                        cartItem.length > 0 ? <Box display={"flex"} gap={"16px"} justifyContent={"center"} alignItems={"center"}>
                        <Button variant='outlined' sx={{
                            border: "1px solid black",
                            color: "black",
                            transition: "all .1s ease",
                            "&:hover": {
                                background: "black",
                                color: "white",
                                border: "none"
                            }
                        }} onClick={decreaseCounter}>-</Button>
                        <Box>{item.quantity ? item.quantity : counter}</Box>
                        <Button variant='outlined' sx={{
                            border: "1px solid black",
                            color: "black",

                            transition: "all .1s ease",
                            "&:hover": {
                                background: "black",
                                color: "white",
                                border: "none"
                            }
                        }} onClick={() => {increaseCounter()}}>+</Button>
                    </Box>: null
                    }
                    
                    <Box display={"flex"} paddingTop={"16px"} paddingBottom={"16px"}  justifyContent={"center"}>
                            {
                                cartBtn()
                            }
                    </Box>

                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default SingleProductDetails
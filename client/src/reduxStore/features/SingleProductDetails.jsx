import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsInCart, addToCart} from './cartSlice'


const SingleProductDetails = ({item}) => {
    const dispatch = useDispatch()
    const {image, price, title, description, id} = item

    
    const [counter,setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        if(counter > 0){
            setCounter(counter - 1)
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

                    <Box display={"flex"} gap={"16px"} justifyContent={"center"} alignItems={"center"}>
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
                        <Box>{counter}</Box>
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
                    </Box>
                    
                    <Box display={"flex"} paddingTop={"16px"} paddingBottom={"16px"}  justifyContent={"center"}>
                        <Button sx={{textTransform: "lowercase", color: "black", border: "1px solid black", transition: "all .1s ease",
                            "&:hover": {
                                background: "black",
                                color: "white",
                            }}} onClick={() => {
                                if(counter > 0){
                                    console.log("added to cart")
                                    dispatch(addToCart(id,title,price,counter,image))
                                }
                            }}>Add to cart</Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default SingleProductDetails
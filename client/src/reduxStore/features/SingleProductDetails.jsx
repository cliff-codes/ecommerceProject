import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsInCart } from './cartSlice'


const SingleProductDetails = ({item}) => {
    const {image, price, title, description, id} = item

    const items = useSelector(itemsInCart)


  return (
    <Container sx={{marginTop: "32px"}}>
        <Grid container justifyContent={"center"} spacing={3}>
            <Grid item>
                <Card sx={{height: "200px", width: "250px", boxShadow: "none"}}>
                    <img height={"100%"} width={"auto"} src= {`${image}`} />
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
                        }}>-</Button>
                        <Box>0</Box>
                        <Button variant='outlined' sx={{
                            border: "1px solid black",
                            color: "black",

                            transition: "all .1s ease",
                            "&:hover": {
                                background: "black",
                                color: "white",
                                border: "none"
                            }
                        }}>+</Button>
                    </Box>
                    
                    <Box display={"flex"} paddingTop={"16px"} paddingBottom={"16px"}  justifyContent={"center"}>
                        <Button sx={{textTransform: "lowercase", color: "black", border: "1px solid black", transition: "all .1s ease",
                            "&:hover": {
                                background: "black",
                                color: "white",
                            }}}>Add to cart</Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default SingleProductDetails
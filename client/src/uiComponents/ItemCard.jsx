import React from 'react'
import { Box, Button, Card, Grid, Typography, colors } from '@mui/material'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
    const {id, image, price, title, description} = item
    const formatedText = (name,len) => {
        if(name.length > len){
            return `${name.substring(0,len)}...`
        }
        return name
    }
  return (
    <Grid item key={id}>
        <Link style={{color: "inherit", textDecoration: "none"}} to={`/${id}`}>
            <Card sx={{
                height: "280px",
                width: "200px",
                border: "none",
                display:" flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                transition: "all .1s ease",
                "&:hover": {
                    transform: "scale(1.02)"
                }
            }}>
            <Box display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"center"} sx={{ maxWidth: "150px", maxHeight: "150px"}}>
                        <img width={"120px"} height={"auto"} src={`${image}`}/>
            </Box>

            <Box>                
                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"2px"}>
                        <Typography fontWeight={"600"} sx={{fontSize: {xs: "16px"} }} align='left'>{`${formatedText(title,14)}`}</Typography>
                        <Typography fontWeight={"600"} align='right'>{`$${price}`}</Typography>
                    </Box>
                    <Typography textAlign={"left"}>{formatedText(description,18)}</Typography>

                    <Box display={"flex"} margin = {"10px 0"} justifyContent={"flex-end"}>     
                        <Button variant='outlined' sx={{textTransform: "lowercase", color: "black", border: "1px solid black",outline: "none" ,"&:hover" : {color: "white", background: "black", outline: "none"}}}>Add to Cart</Button>
                    </Box>
            </Box>
            </Card>
        </Link>
    </Grid>
  )
}

export default ItemCard
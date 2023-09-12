import React from 'react'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
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
    <Grid item justifyContent={"center"} key={id} xs = {5.5} sm = {4} md = {3} m={"8px"}>
        <Link style={{color: "inherit", textDecoration: "none"}} to={`/${id}`}>
            <Card  sx={{
                maxHeight: "280px",
                height: "100%",
                // maxWidth: "200px",
                width: "100%",
                border: "none",
                display:" flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                transition: "all .1s ease",
                marginBottom: "8px",
                "&:hover": {
                    transform: "scale(1.02)"
                }
            }}>
            <Box display={"flex"} flexGrow={1} alignItems={"center"} paddingBottom={"16px"} justifyContent={"center"} sx={{ maxWidth: "150px", maxHeight: "150px"}}>
                        <img width={"120px"} height={"auto"} src={`${image}`}/>
            </Box>

            <Box>                
                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"2px"}>
                        <Typography paddingRight={"16px"} fontWeight={"600"} sx={{fontSize: {xs: "16px"} }} align='left'>{`${formatedText(title,11)}`}</Typography>
                        <Typography fontWeight={"600"} align='right'>{`$${price}`}</Typography>
                    </Box>
                    <Typography textAlign={"left"}>{formatedText(description,18)}</Typography>
            </Box>
            </Card>
        </Link>
    </Grid>
  )
}
export default ItemCard
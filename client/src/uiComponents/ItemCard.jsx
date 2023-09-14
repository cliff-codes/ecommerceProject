import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
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
    <Grid item justifyContent={"center"} alignItems={'center'} key={id} sm = {6} md = {4} spacing={2} overflow={'hidden'} boxSizing={'border-box'} padding={0} minHeight={"220px"} minWidth={"140px"} height={'auto'} width={'auto'}>
        <Link style={{color: "inherit", textDecoration: "none"}} to={`/${id}`}>
            <Card  sx={{
                height: "inherit",
                width: "auto",
                border: "none",
                padding: "8px",
                display:" flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all .1s ease",
                "&:hover": {
                    transform: "scale(1.02)"
                }
            }}>
                <CardMedia image={image} sx={{maxWidth: "180px", width: "100%", maxHeight: "140px", minHeight: "100px", height: "auto" , backgroundSize: "contain"}} />

            <Box>                
                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
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
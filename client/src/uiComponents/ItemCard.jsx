import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'

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
        <Card sx={{
            height: "250px",
            width: "200px",
            border: "none",
            // boxShadow: "none",
            display:" flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0"
        }}>
           <Box display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"center"} sx={{ maxWidth: "150px", maxHeight: "150px"}}>
                <img width={"120px"} height={"auto"} src={`${image}`}/>
                
           </Box>

           <Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"2px"}>
                    <Typography sx={{fontSize: {xs: "16px", md: "18px", lg: "18px"} }} align='left'>{`${formatedText(title,14)}`}</Typography>
                    <Typography align='right'>{`$${price}`}</Typography>
                </Box>
                <Typography textAlign={"left"}>{formatedText(description,18)}</Typography>
           </Box>
        </Card>
    </Grid>
  )
}

export default ItemCard
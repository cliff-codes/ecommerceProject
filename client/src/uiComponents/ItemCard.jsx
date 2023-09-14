import React from 'react'
import { Box, useTheme, useMediaQuery, Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))
    const fontSize = isSmallScreen ? "16px" : "14px"

    const {id, image, price, title, description} = item
    const formatedText = (name,len) => {
        if(name.length > len){
            return `${name.substring(0,len)}...`
        }
        return name
    }
  return (
    <Grid item justifyContent={"center"} alignItems={'center'} key={id} xs = {6} sm = {4} md = {3} boxSizing={'border-box'} padding={"8px"} >
        <Link style={{color: "inherit", textDecoration: "none"}} to={`/${id}`}>
            <Card  sx={{
                height: "100%",
                width: "100%",
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
                        <Typography paddingRight={"16px"} fontWeight={"600"} sx={{ fontSize }} align='left'>{`${formatedText(title,11)}`}</Typography>
                        <Typography sx={{fontSize}} fontWeight={"600"} align='right'>{`$${price}`}</Typography>
                    </Box>
                    <Typography sx={{fontSize}} textAlign={"left"}>{formatedText(description,18)}</Typography>
            </Box>
            </Card>
        </Link>
    </Grid>
  )
}
export default ItemCard
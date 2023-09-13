import React from 'react'
import { Box, Grid, Typography, Card, Container, CardMedia } from '@mui/material'
import MenImg from "../assets/men.jpg"
import WomenImg from "../assets/women.jpg"
import Electronics from "../assets/electronics.jpg"
import { Link } from 'react-router-dom'

const ProductsCategories = () => {
  return (
    <Box marginTop={"32px"}>
       <Container sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
       <Typography marginBottom={"8px"} fontSize={{sm: "16px", md: "18px", lg: "20px"}} fontWeight={"600"}>Products Categories</Typography>
        <Grid container justifyContent={"center"} spacing={3}>
            <Grid item>
                <Card sx={{height: "150px",width: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",transition: "all .2s ease", "&:hover": {background: "black", color: "white"}}}>
                    <Link to={'/category/men'}>
                        <CardMedia sx={{height: "100px", width: "100px", borderRadius: "50%"}} image={MenImg}/>
                    </Link>
                    <Typography sx={{transition: "all .1s ease"}}>Men clothing</Typography>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                <Card sx={{height: "150px",width: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",transition: "all .2s ease", "&:hover": {background: "black", color: "white"}}}>
                    <Link to={'/category/women'}>
                    <CardMedia sx={{height: "100px", width: "100px", borderRadius: "50%"}} image={WomenImg}/>
                    </Link>
                    <Typography>Women clothing</Typography>
                </Card>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                <Card sx={{height: "150px",width: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",transition: "all .2s ease", "&:hover": {background: "black", color: "white"}}}>
                    <Link to={'/category/jewellery'}>
                    <CardMedia sx={{height: "100px", width: "100px", borderRadius: "50%"}} image={MenImg}/>
                    </Link>
                    <Typography>Jewellery</Typography>
                </Card>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                <Card sx={{height: "150px",width: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",transition: "all .2s ease", "&:hover": {background: "black", color: "white"}}}>
                    <Link to={'/category/electronics'}>
                        <CardMedia sx={{height: "100px", width: "100px", borderRadius: "50%"}} image={Electronics}/>
                    </Link>
                    <Typography>Electronics</Typography>
                </Card>
                </Card>
            </Grid>
        </Grid>
       </Container>
    </Box>
  )
}

export default ProductsCategories
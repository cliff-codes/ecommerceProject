import React from 'react'
import FeaturedProductsList from '../reduxStore/features/FeaturedProductsList'
import { Box, Container, Typography } from '@mui/material'

const FeaturedProductSection = () => {
  return (
    <Container sx={{ marginTop: "64px", marginBottom: "64px"}}>
        <Box>
            <Typography marginBottom={"20px"} fontWeight={"600"} sx={{fontSize: {xs: "17px", md : "20px"}}}>Featured Products</Typography>
        </Box>
        
        <FeaturedProductsList/>
    </Container>
  )
}

export default FeaturedProductSection
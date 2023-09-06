import React from 'react'
import { Box, Container, Grid, Skeleton } from '@mui/material'

const InterestedProductsSkeleton = () => {
  return (
    <Box>
        <Container sx={{
          display: "flex",
          justifyContent: "center"
        }}>
            
            <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"}>
              <Skeleton variant='text' width={"150px"} height={"40px"}/>
              <Grid container  spacing={2}>
                <Grid item> <Skeleton variant='text' width={"150px"} height={"200px"}/><Skeleton variant='text' height={"30px"}/></Grid>
                <Grid item> <Skeleton variant='text' width={"150px"} height={"200px"}/><Skeleton variant='text' height={"30px"}/></Grid>
                <Grid item> <Skeleton variant='text' width={"150px"} height={"200px"}/><Skeleton variant='text' height={"30px"}/></Grid>
              </Grid>
            </Box>
        </Container>
    </Box>
  )
}

export default InterestedProductsSkeleton
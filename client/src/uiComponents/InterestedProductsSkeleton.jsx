import React from 'react'
import { Box, Container, Grid, Skeleton } from '@mui/material'

const InterestedProductsSkeleton = () => {
  return (
    <Box>
        <Container>
            <Grid container justifyContent={"center"} spacing={2}>
               <Grid item> <Skeleton variant='text' width={"150px"} height={"200px"}/><Skeleton variant='text' height={"30px"}/></Grid>
               <Grid item> <Skeleton variant='text' width={"150px"} height={"200px"}/><Skeleton variant='text' height={"30px"}/></Grid>
               <Grid item> <Skeleton variant='text' width={"150px"} height={"200px"}/><Skeleton variant='text' height={"30px"}/></Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default InterestedProductsSkeleton
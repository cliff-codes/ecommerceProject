import { Box, Skeleton, Grid } from '@mui/material'
import React from 'react'



const SingleProductSkeletonLoader = () => {
  return (
    <Grid container justifyContent={"center"} gap={"16px"} alignItems={"center"}>
        <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Skeleton width={"250px"} height={"400px"}></Skeleton>
        </Grid>
        <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box>
                <Skeleton width={"250px"} height={"200px"}></Skeleton>
                <Skeleton width={"250px"} ></Skeleton>
                <Skeleton width={"250px"} ></Skeleton>
                <Skeleton width={"250px"} ></Skeleton>
            </Box>
        </Grid>
    </Grid>
  )
}

export default SingleProductSkeletonLoader
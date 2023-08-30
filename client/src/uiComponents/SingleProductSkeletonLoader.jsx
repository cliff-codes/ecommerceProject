import { Box, Skeleton, Grid } from '@mui/material'
import React from 'react'



const SingleProductSkeletonLoader = () => {
  return (
    <Grid container justifyContent={"center"} gap={"16px"}>
        <Grid item >
            <Skeleton width={"250px"} height={"400px"}></Skeleton>
        </Grid>
        <Grid item>
            <Skeleton width={"250px"}></Skeleton>
            <Skeleton width={"150px"}></Skeleton>
            <Skeleton width={"250px"} height={"200px"}></Skeleton>
            <Skeleton width={"250px"} ></Skeleton>
            <Skeleton width={"250px"} ></Skeleton>
            <Skeleton width={"250px"} ></Skeleton>
        </Grid>
    </Grid>
  )
}

export default SingleProductSkeletonLoader
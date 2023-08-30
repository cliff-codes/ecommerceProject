import React from 'react'
import { Skeleton, Box } from '@mui/material'

const SkeletonLoader = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
        <Skeleton height={"200px"} width={"200px"} variant='text'/>
        <Skeleton height={"20px"} width={"200px"} variant='text'/>
        <Skeleton height={"20px"} width={"200px"} variant='text'/>
    </Box>
  )
}

export default SkeletonLoader
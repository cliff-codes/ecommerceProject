import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100px"} sx={{background: "black"}}>
        <Typography color={"white"}>Developed by Clifford</Typography>
    </Box>
  )
}

export default Footer
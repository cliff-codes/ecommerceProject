import React from 'react'
import Logo from './Logo'
import Search from './Search'
import UserIcon from './UserIcon'
import {Box, Container, Grid} from '@mui/material'
import { Link } from 'react-router-dom'



const Nav = () => {
  return (
    <div style={{
        height: "80px",
        display: "flex",
        justifyContent: "center"
    }}>
        <Container sx={{display: "flex", justifyContent: "center"}}>
           <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Grid item xs = {2}  sm = {3} md = {3} lg = {3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box>
                            <Logo/>
                        </Box>
            </Grid>
            <Grid item xs = {7} sm md lg>
                <Search/>
            </Grid>
            <Grid item xs sm = {3} md = {3} lg = {3}>
                <UserIcon/>
            </Grid>
           </Grid>
        </Container>
    </div>
  )
}

export default Nav
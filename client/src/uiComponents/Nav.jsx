import React from 'react'
import Logo from './Logo'
import Search from './Search'
import UserIcon from './UserIcon'
import {Container, Grid} from '@mui/material'


const Nav = () => {
  return (
    <div style={{
        height: "80px",
        border: "1px solid red",
        display: "flex",
        justifyContent: "center"
    }}>
        <Container sx={{display: "flex", border: "1px solid red", justifyContent: "center"}}>
           <Grid container spacing={2} sx={{alignItems: "center", justifyContent: "center"}}>
            <Grid item xs = {2}  sm = {3} md = {3} lg = {3} >
                <item><Logo/></item>
            </Grid>
            <Grid item xs = {7} sm md lg>
                <item><Search/></item>
            </Grid>
            <Grid item xs sm = {3} md = {3} lg = {3}>
                <item><UserIcon/></item>
            </Grid>
           </Grid>
        </Container>
    </div>
  )
}

export default Nav
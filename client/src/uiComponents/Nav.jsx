import React from 'react'
import Logo from './Logo'
import Search from './Search'
import UserIcon from './UserIcon'
import {Container} from '@mui/material'


const Nav = () => {
  return (
    <div style={{
        height: "80px",
        border: "1px solid red"
    }}>
        <Container sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Logo/>
            <Search/>
            <UserIcon/>
        </Container>
    </div>
  )
}

export default Nav
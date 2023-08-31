import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';


const UserIcon = () => {
  return (
    <div style={{
        display : "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "8px"
    }}>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"30px"} width={"30px"} borderRadius={"50%"} sx={{"&:hover": {background: "#D7D7D7"}}}>
        <Link style={{padding: 0, display: "flex", alignItems: "center"}} to={"/cart"}><ShoppingCartOutlinedIcon/></Link>
      </Box>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"30px"} width={"30px"} borderRadius={"50%"} sx={{"&:hover": {background: "#D7D7D7"}}}>
        <AccountCircleOutlinedIcon/>
      </Box>
    </div>
  )
}

export default UserIcon
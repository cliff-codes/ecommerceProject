import React from 'react'
import men from "../assets/men.jpg"
import showcaseImg from "../assets/showcaseImg.jpg"
import { Button, Typography } from '@mui/material'

const Showcase = () => {
  return (
    <div style={{
        height: "300px",
        maxWidth: "100%",
        backgroundImage: `url(${showcaseImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <div className='shadow' style={{
            position: "absolute",
            width: "100%",
            height: "300px",
            background: "black",
            opacity: ".4",
        }}>Cover</div>
        <div style={{zIndex: 2, display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
            <Typography fontSize={"26px"} color={"white"} fontWeight={400}>Get 20% off if you buy within the next 24 hours</Typography>
            <Button variant='contained' sx={{
                color: "white",
                background: "black",    
                maxWidth: "120px",
                "&:hover": {
                    background: "white",
                    color: "black"
                }
            }}>Shop Now</Button>
        </div>
    </div>
  )
}

export default Showcase
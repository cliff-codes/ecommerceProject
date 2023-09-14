import { Button, Input } from '@mui/material'
import React from 'react'


const Search = () => {

  return (
    <div style={{
        width: "100%",
        height: "40px",
        border: "1px solid #353535",
        padding: 0,
        margin: 0,
        display: "flex",
        borderRadius: "5px",
        fontWeight: "bold"
    }}>
        <Input  
          style={{
            width: "100%",
            border: "none", borderRadius: "5px",
            outline: "none",
            padding: "0 2px 0 2px",
          }}  
            />
        <Button style={{
            width: "80px",
            border: "none",
            borderRadius: "5px",
            fontFamily: "inherit",
            fontWeight: 600,
            background: "#353535",
            color: "white"
        }}>Search</Button>
    </div>
  )
}

export default Search
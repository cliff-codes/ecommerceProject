import React from 'react'

const Search = () => {
  return (
    <div style={{
        width: "300px",
        height: "40px",
        border: "1px solid red",
        padding: 0,
        margin: 0,
        display: "flex",
        borderRadius: "5px",
    }}>
        <input style={{
            width: "100%",
            border: "none", borderRadius: "5px",
            outline: "none",
        }}/>
        <button style={{
            width: "80px",
            border: "none",
            borderRadius: "5px",
            fontFamily: "inherit",
            fontWeight: 600,
            "&:hover": {
                background: "#000"
            }
        }}>Search</button>
    </div>
  )
}

export default Search
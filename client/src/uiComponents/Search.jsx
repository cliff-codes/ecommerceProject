import { useState } from 'react'
import { Button, Input, Tooltip } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { passSearchItem } from '../reduxStore/features/searchSlice'
import { useDispatch } from 'react-redux'

const Search = () => {
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "5px",
            outline: "none",
            padding: "0 2px 0 2px",
          }}  
            />
        <Tooltip title='search feature under construction' arrow>
          <Button style={{
              width: "80px",
              border: "none",
              borderRadius: "5px",
              fontFamily: "inherit",
              fontWeight: 600,
              background: "#353535",
              color: "white"
          }}
            onClick={() => {
              if(searchValue.length > 0){
                dispatch(passSearchItem(searchValue))
                navigate('/search')
              }
            }}
          >Search</Button>
        </Tooltip>
    </div>
  )
}

export default Search
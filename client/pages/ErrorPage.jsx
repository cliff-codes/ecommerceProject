import { Box, Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
        <Container sx={{flexGrow: 1, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
            <Box>Page not found :(</Box>
            <Button>
                <Link to={"/"}>Click to visit home page</Link>
            </Button>
        </Container>
  )
}

export default ErrorPage
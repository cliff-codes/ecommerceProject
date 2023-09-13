import { Box, Button, FormLabel, Input, Typography } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const AuthScreen = () => {
  return (
    <Box display={'flex'} gap={'8px'} alignItems={'center'} flexDirection={'column'} marginBottom={'16px'}>
        <Logo/>
        <Typography mb={'16px'}>Login</Typography>
        <Input placeholder='email' />
        <Input placeholder='password' sx={{mb: "16px"}}/>
        <Button sx={{color: "black", border: "1px solid black", "&:hover": {bgcolor: "black", color: "white"}}}>Sign-In</Button>
        <Typography fontSize={'14px'} mt={'32px'}>sign-in by</Typography>
        <Box display={'flex'}>
            <Button sx={{color: "black"}}><GoogleIcon/></Button>
            <Button sx={{color: "black"}}><FacebookIcon/></Button>
        </Box>
    </Box>
  )
}

export default AuthScreen
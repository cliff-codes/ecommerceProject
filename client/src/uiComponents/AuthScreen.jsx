import { Box, Button, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logo from './Logo'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import validator from 'validator'
import {useRegisterCustomerMutation} from '../reduxStore/features/authSlice'

const AuthScreen = () => {
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const [isValid, setIsValid] = useState(null)

  const [registerCustomer] = useRegisterCustomerMutation()

  const handleRegisterCustomer = async() => {
    const newCustomer = {
      data: {
        email,
        password
      }
    }

    try {
      const response = await registerCustomer(newCustomer)
      if(response.error){
        console.error("Error creating customer: ", response.error)
      }else{
        console.log("post created successfully: ", response.data)
      }
    } catch (error) {
        console.log("Error creating post: ", error)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    //checking if email is valid
    setIsValid(validator.isEmail(email))
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const LoginSection = () => {
    return <>
        <Typography mb={'16px'}>Login</Typography>
        <Input 
          value={email}
          type='text' 
          placeholder='email' 
          onChange={handleEmailChange}
          error = {isValid !== null && !isValid}
          sx={{minWidth: "230px"}}
        />
        <Input 
          value={password}
          placeholder='password' 
          sx={{mb: "16px", minWidth: "230px"}}
          onChange={handlePasswordChange}
        />
        <Button 
          sx={{color: "black", border: "1px solid black", "&:hover": {bgcolor: "black", color: "white"}}}
          >Sign-In</Button>
        <Typography fontSize={'14px'} mt={'32px'}>sign-in by</Typography>
        <Box display={'flex'}>
            <Button sx={{color: "black"}}><GoogleIcon/></Button>
            <Button sx={{color: "black"}}><FacebookIcon/></Button>
        </Box>
        <Button  
          sx={{
            color: 'black',
            fontSize: '10px', 
            bgcolor: "#d4d4d4"
            }}
          onClick={mountSignUp}
          >sign-up</Button>
    </>
  }  

  
  //state of which screen should be displayed. login/sign up
  const [signUp, setSignUp] = useState(false)
  const mountSignUp = () => {
    setSignUp(true)
  }
  const signUpSection = () => {
    return <>
        <Typography mb={'16px'}>sign-Up</Typography>
        <Input 
          value={email}
          type='text' 
          placeholder='email' 
          onChange={handleEmailChange}
          error = {isValid !== null && !isValid}
          sx={{minWidth: "230px"}}
        />
        <Input 
          value={password}
          placeholder='password' 
          sx={{ minWidth: "230px"}}
          onChange={handlePasswordChange}
        />
        <Input 
          value={phone}
          placeholder='phone'
          sx={{mb: "16px",minWidth: "230px"}}
        />
        <Button sx={{color: "black", border: "1px solid black", "&:hover": {bgcolor: "black", color: "white"}}}
        onClick={() => {
          if(setIsValid(validator.isEmail(email)) && password){
            handleRegisterCustomer()
          }
        }}
        >sign-up</Button>

        <Button  
          sx={{
            color: 'black',
            fontSize: '10px', 
            bgcolor: "#d4d4d4"
            }}
          onClick={() => setSignUp(false)}
          >login</Button>
    </>
  }

  return (
    <Box display={'flex'} gap={'8px'} alignItems={'center'} flexDirection={'column'} marginBottom={'16px'}>
        <Logo/>
        {signUp ? signUpSection() : LoginSection()}
    </Box>
  )
}

export default AuthScreen
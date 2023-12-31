import { Box, Button, Input, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import validator from 'validator'
import axios from '../api/axios';

const REGISTER_URL = '/register'
// import {useRegisterCustomerMutation} from '../reduxStore/features/authSlice'

const AuthScreen = () => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setIsValid] = useState(null)

  const handleRegisterCustomer = async() => {
    try {
      const response = await axios.post(REGISTER_URL,
      JSON.stringify({
        email,
        password
      }),
      {
        headers: {'Content-Type': 'application/json'},
        withCredentials: false
      })
      const data = response.data
      console.log(JSON.stringify(response))
      
      if(response.ok){
        localStorage.setItem('token',data.customerToken)
      }
    } catch (error) {
      if(!error?.response){
        console.log('No server respone')
      }else if(error.response?.status === 409){
        console.log('email already exist')
      }else{
        console.log('registeration failed')
      }
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

  // const LoginSection = () => {
  //   return <>
  //       <Typography mb={'16px'}>Login</Typography>
  //       <Input 
  //         value={email}
  //         type='text' 
  //         placeholder='email' 
  //         onChange={handleEmailChange}
  //         error = {isValid !== null && !isValid}
  //         sx={{minWidth: "230px"}}
  //       />
  //       <Input 
  //         value={password}
  //         placeholder='password' 
  //         sx={{mb: "16px", minWidth: "230px"}}
  //         onChange={handlePasswordChange}
  //       />
  //       <Button 
  //         sx={{color: "black", border: "1px solid black", "&:hover": {bgcolor: "black", color: "white"}}}
  //         // onClick={handleCustomerLogin}
  //         >Sign-In</Button>
  //       <Typography fontSize={'14px'} mt={'32px'}>sign-in by</Typography>
  //       <Box display={'flex'}>
  //           <Button sx={{color: "black"}}><GoogleIcon/></Button>
  //           <Button sx={{color: "black"}}><FacebookIcon/></Button>
  //       </Box>
  //       <Button  
  //         sx={{
  //           color: 'black',
  //           fontSize: '10px', 
  //           bgcolor: "#d4d4d4"
  //           }}
  //         onClick={mountSignUp}
  //         >sign-up</Button>
  //   </>
  // }  


  //state of which screen should be displayed. login/sign up
  
  const [signUp, setSignUp] = useState(false)
  const mountSignUp = () => {
    setSignUp(true)
  }

  const userRef = useRef()
  const errRef = useRef()

  useEffect(() => {
    userRef.current.focus()
  },[])

  const signUpSection = () => {
    return <>
        <Typography mb={'16px'}>sign-Up</Typography>
        <Input 
          ref={userRef}
          value={email}
          required
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
        
        <Button sx={{color: "black", border: "1px solid black", "&:hover": {bgcolor: "black", color: "white"}}}
        onClick={() => {
            console.log('clicked')
            handleRegisterCustomer()
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
        { signUpSection()}
    </Box>
  )
}

export default AuthScreen
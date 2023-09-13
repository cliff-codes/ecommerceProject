import React,{useState} from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge, Box, Modal, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { itemsInCart } from '../reduxStore/features/cartSlice';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AuthScreen from './AuthScreen';


//portal styles
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  minWidth: "300px",
  bgcolor: 'background.paper',
  boxShadow: 24,
  margin: "0 8px",
  p: 4,
  '@media (min-width:600px)': {
    maxWidth: '400px',
  },
  borderRadius: '8px'
};


const UserIcon = () => {
  const cartItems = useSelector(itemsInCart)
  const [openPortal, setOpenPortal] = useState(false)
  return (
    <div style={{
        display : "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "8px",
    }}>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"30px"} width={"30px"} borderRadius={"50%"} sx={{"&:hover": {background: "#D7D7D7"}}}>
        <Link style={{padding: 0, display: "flex", alignItems: "center"}} to={"/cart"}>
          <Badge badgeContent = {cartItems.length} color='secondary' sx={{color: "black"}}>
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </Link>
      </Box>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"30px"} width={"30px"} borderRadius={"50%"} sx={{"&:hover": {background: "#D7D7D7"}}}>
        <AccountCircleOutlinedIcon onClick = {() => setOpenPortal(true)}/>

        <Modal
        open={openPortal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <CloseIcon onClick = {() =>   setOpenPortal(false)}  />
            </Box>
            <AuthScreen/>
          </Box>
        </Modal>
      </Box>
    </div>
  )
}

export default UserIcon
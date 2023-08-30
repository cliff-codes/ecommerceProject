import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItem, item, singleProductError, singleProductLoading } from '../src/reduxStore/features/singleProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import SingleProductSkeletonLoader from '../src/uiComponents/SingleProductSkeletonLoader'


const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    
    const productItem = useSelector(item)
    const errorState = useSelector(singleProductError)
    const loadingState = useSelector(singleProductLoading)


  return (
    <Box flexGrow={1}>
        Product Details page
        <Container>
            <SingleProductSkeletonLoader/>
        </Container>
    </Box>
  )
}

export default ProductDetailsPage
import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItem, item, singleProductError, singleProductLoading } from '../src/reduxStore/features/singleProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import SingleProductSkeletonLoader from '../src/uiComponents/SingleProductSkeletonLoader'
import SingleProductDetails from '../src/reduxStore/features/SingleProductDetails'
import InterestedProductsSection from '../src/uiComponents/InterestedProductsSection'



const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    
    const productItem = useSelector(item)
    const errorState = useSelector(singleProductError)
    const loadingState = useSelector(singleProductLoading)


    useEffect(() => {
        dispatch(fetchItem({id}))
    },[dispatch,id])

  return (
    <Box flexGrow={1}>
        {loadingState ? 
            <Container>
                <SingleProductSkeletonLoader/>
            </Container>
        :   errorState ?<Box>Please reload page</Box> 
        :   productItem ? <Box><SingleProductDetails item={productItem}/><InterestedProductsSection/></Box> : null 
    }
    </Box>
  )
}

export default ProductDetailsPage
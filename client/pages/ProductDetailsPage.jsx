import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItem, item, singleProductError, singleProductLoading } from '../src/reduxStore/features/singleProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import SingleProductSkeletonLoader from '../src/uiComponents/SingleProductSkeletonLoader'
import InterestedProductsSkeleton from '../src/uiComponents/InterestedProductsSkeleton'


const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    
    const productItem = useSelector(item)
    const errorState = useSelector(singleProductError)
    const loadingState = useSelector(singleProductLoading)

    useEffect(() => {
        dispatch(fetchItem({id}))
    },[dispatch])

  return (
    <Box flexGrow={1}>
        {loadingState ? 
            <><Box>Product Details page</Box>
            <Container>
                <SingleProductSkeletonLoader/>
            </Container>
            <Container>
                <InterestedProductsSkeleton/>
            </Container></> 
        :   errorState ?<Box>Please reload page</Box> : null 
    }
    </Box>
  )
}

export default ProductDetailsPage
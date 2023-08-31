import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { errorMsg,  fetchInterestedProducts,  products, productsLoading } from '../reduxStore/features/interestedProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './ItemCard'
import InterestedProductsSkeleton from './InterestedProductsSkeleton'


const InterestedProductsSection = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(productsLoading)
    const interestedProducts = useSelector(products)
    const isError = useSelector(errorMsg)

    useEffect(() => {
        dispatch(fetchInterestedProducts())
    }, [dispatch])
    
  return (
    <Container>
        <Grid container justifyContent={"center"} spacing={3} marginTop={"32px"} marginBottom={"24px"}>
            {
               isLoading ? <InterestedProductsSkeleton/> :
               interestedProducts ? interestedProducts.map(item => (
                    <ItemCard key={item.id} item={item}/>
                )):
                isError ? <h3>Reload page to load products :( </h3> : null
            }
        </Grid>
    </Container>
  )
}

export default InterestedProductsSection
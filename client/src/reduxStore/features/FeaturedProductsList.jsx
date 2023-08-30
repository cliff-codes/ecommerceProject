import React, {useState, useEffect} from 'react'
import { apiData, apiErrorState, apiLoadingState, fetchFeaturedProducts } from './featuredProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid, Box } from '@mui/material'
import ItemCard from '../../uiComponents/ItemCard'
import SkeletonLoader from '../../uiComponents/SkeletonLoader'


const FeaturedProductsList = () => {
    const dispatch = useDispatch()
    const loadingState = useSelector(apiLoadingState)
    const data = useSelector(apiData)
    const errorState = useSelector(apiErrorState)

   useEffect(()=> {
        dispatch(fetchFeaturedProducts())    
   },[dispatch])

  return (
    <Container sx={{minHeight: "250px"}}>
        <Grid container spacing={2} gap={"8px"}>
            {
                loadingState ? <> 
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                </> : 
                    data ? data.map(item => (
                        <ItemCard item={item}/>
                    ))
                    : null
            }
        </Grid>
    </Container>
  )
}

export default FeaturedProductsList
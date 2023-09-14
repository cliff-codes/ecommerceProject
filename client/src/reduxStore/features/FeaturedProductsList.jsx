import React, {useState, useEffect} from 'react'
import { apiData, apiErrorState, apiLoadingState, fetchFeaturedProducts } from './featuredProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material'
import ItemCard from '../../uiComponents/ItemCard'
import SkeletonLoader from '../../uiComponents/SkeletonLoader'
import Error from '../../uiComponents/Error'

const FeaturedProductsList = () => {
    const dispatch = useDispatch()
    const loadingState = useSelector(apiLoadingState)
    const data = useSelector(apiData)
    const errorState = useSelector(apiErrorState)

   useEffect(()=> {
        dispatch(fetchFeaturedProducts())    
   },[dispatch])

  return (
        <Grid maxWidth={"inherit"} container justifyContent={"center"} gap={"16px"}  minHeight={"250px"}  spacing={4} >
            {
                loadingState ? <> 
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                </> : 
                    data ? data.map(item => (
                        <ItemCard key={item.id} item={item}/>
                    ))
                    : <Error/>
            }
        </Grid>
  )
}

export default FeaturedProductsList
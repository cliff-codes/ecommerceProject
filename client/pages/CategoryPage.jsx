import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import SkeletonLoader from '../src/uiComponents/SkeletonLoader'
import { useParams } from 'react-router-dom'
import { useFetchProductsQuery } from '../src/reduxStore/features/categorySlice'
import ItemCard from '../src/uiComponents/ItemCard'


const CategoryPage = () => {
    const {categoryType} = useParams()
    
    //load page content from api
    const {data, isLoading, error} = useFetchProductsQuery(categoryType)

    //loader for the page
    const pageLoader = () => {
        return <>
            <Grid container justifyContent={'center'} spacing={3}>
                <Grid item>
                    <SkeletonLoader/>
                </Grid>
                <Grid item>
                    <SkeletonLoader/>
                </Grid>
                <Grid item>
                    <SkeletonLoader/>
                </Grid>
                <Grid item>
                    <SkeletonLoader/>
                </Grid>
                <Grid item>
                    <SkeletonLoader/>
                </Grid>
                <Grid item>
                    <SkeletonLoader/>
                </Grid>
            </Grid>
        </>
    }

    //load content in data
    const loadContent = () => {
        return <>
            <Grid container justifyContent={'center'} spacing={3} m={"16px 0 64px 0"}>
                {data.map(el => (
                    <ItemCard item={el}/>
                ))}
            </Grid>
        </>
    }


    return (
    <Box flexGrow={1}>
        <Container maxWidth = "md" sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            {
                isLoading ? pageLoader() : 
                    error ? <Typography>please reload page :(</Typography> :
                        loadContent()
            }
        </Container>
    </Box>
  )
}

export default CategoryPage
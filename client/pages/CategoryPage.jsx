import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import SkeletonLoader from '../src/uiComponents/SkeletonLoader'


const CategoryPage = () => {
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
    return (
    <Box flexGrow={1}>
        <Container maxWidth = "md" sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            {pageLoader()}
        </Container>
    </Box>
  )
}

export default CategoryPage
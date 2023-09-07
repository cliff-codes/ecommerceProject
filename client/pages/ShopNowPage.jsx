import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InterestedProductsSkeleton from '../src/uiComponents/InterestedProductsSkeleton'
import { useFetchProductsQuery } from '../src/reduxStore/features/shopNowSlice'
import ItemCard from '../src/uiComponents/ItemCard'


const ShopNowPage = () => {
    const {data, error, isLoading} = useFetchProductsQuery("electronics")
    const {data:jdata, error:jError, isLoading: jLoader} = useFetchProductsQuery("jewellery")

    if(jLoader){
        console.log(`jloader is loading items`)
    }

    if(isLoading){
        console.log("loading...")
        return(
            <Box flexGrow={1}>
                    <Container>
                        <InterestedProductsSkeleton/>
                    </Container>

                    <Container>
                        <InterestedProductsSkeleton/>
                    </Container>

                    <Container>
                        <InterestedProductsSkeleton/>
                    </Container>

                    <Container>
                        <InterestedProductsSkeleton/>
                    </Container>
                </Box>
        )
    }
    if(error){
        console.log(error.message)
        return(
            <Box flexGrow={1} display={"flex"} justifyContent={"center"}>
                <Container>
                    <Typography>{error.message}</Typography>
                </Container>
            </Box>
        )
    }

    if(data){
        console.log(data)
        return (
            <Box flexGrow={1} display={"flex"} justifyContent={"center"} marginBottom={"32px"}>
                <Container maxWidth = "md">
                    <Typography align='left' marginY={"16px"} fontWeight={600}>Electronics</Typography>
                    <Grid container spacing={3}>
                        {
                            data.map(item => (
                                <ItemCard key={item.id} item={item}/>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
      )
    }

}

export default ShopNowPage
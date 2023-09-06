import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InterestedProductsSkeleton from '../src/uiComponents/InterestedProductsSkeleton'
import { useFetchProductsQuery } from '../src/reduxStore/features/shopNowSlice'
import ItemCard from '../src/uiComponents/ItemCard'


const ShopNowPage = () => {
    const {data, error, isLoading} = useFetchProductsQuery("electronics")

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
            <Box>
                {console.log("rendered")}
                <Container>
                    <Typography>Electronics</Typography>
                </Container>
            </Box>
      )
    }

}

export default ShopNowPage
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InterestedProductsSkeleton from '../src/uiComponents/InterestedProductsSkeleton'
import { useFetchProductsQuery } from '../src/reduxStore/features/shopNowSlice'
import ItemCard from '../src/uiComponents/ItemCard'


const ShopNowPage = () => {
    const {data:jdata, error:jError, isLoading: jLoader} = useFetchProductsQuery("jewelery")
    const {data, error, isLoading} = useFetchProductsQuery("electronics")

    if(isLoading){
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
        return (
            <Box flexGrow={1} display={"flex"} flexDirection={"column"} justifyContent={"center"} marginBottom={"32px"}>
                <Container maxWidth = "md" sx={{marginBottom: "64px"}}>
                    <Typography align='left' marginY={"16px"} fontWeight={600}>Electronics</Typography>
                    <Grid container spacing={4}>
                        {
                            data.map(item => (
                                <ItemCard key={item.id} item={item}/>
                            ))
                        }
                    </Grid>
                </Container>

                {   jLoader ? <Box >
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
                </Box>:
                    jdata ? <Container maxWidth = "md">
                    <Typography align='left' marginY={"16px"} fontWeight={600}>Jewellery</Typography>
                    <Grid container spacing={4}>
                        {
                            jdata.map(item => (
                                <ItemCard key={item.id} item={item}/>
                            ))
                        }
                    </Grid>
                </Container>: 
                    null
                }
            </Box>
      )
    }

}

export default ShopNowPage
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material'
import React, {useEffect} from 'react'
import { reqStatus, data, searchValue, fetchProducts } from '../src/reduxStore/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../src/uiComponents/ItemCard'

const SearchPage = () => {
    const status = useSelector(reqStatus)
    const searchProducts = useSelector(data)
    const searchItem = useSelector(searchValue)
    const dispatch = useDispatch()
    console.log(searchItem)

    useEffect(() => {
        console.log('working')
        fetchProducts(searchItem)
        // console.log(fetchProducts())
        dispatch(fetchProducts({productName: searchItem}))
    },[searchItem]) 

    const Loader = () => {
        return <Container>
            <Grid container maxWidth={'md'}justifyContent={"center"} gap = {"8px"}>
                <Grid item>
                    <Skeleton width={"200px"} height={"180px"} />
                    <Skeleton width={"200px"} height={"30px"} />
                </Grid>
                <Grid item>
                    <Skeleton width={"200px"} height={"180px"} />
                    <Skeleton width={"200px"} height={"30px"} />
                </Grid>
                <Grid item>
                    <Skeleton width={"200px"} height={"180px"} />
                    <Skeleton width={"200px"} height={"30px"} />
                </Grid>
            </Grid>
        </Container>
    }

    const Content = () => {
        return <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant='h6'>Results for your search</Typography>
            <Grid container maxWidth={'md'} justifyContent={'center'} gap={'16px'} mb={'32px'}>
                {
                    searchProducts.map(item => (
                        <ItemCard key={item.id} item={item}/>
                    ))
                }
            </Grid>
        </Box>
    }
    
    return (
    <Box flexGrow={1}>
        {
            status === "loading" ? Loader() : searchItem ? Content() : 
            <h4>Error loading data</h4>
        }
    </Box>
  )
}

export default SearchPage
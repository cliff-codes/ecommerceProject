import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/products/category/"}),

    endpoints: (builder) =>  ({
        fetchProducts: builder.query({
            query: (category) => `${category}` 
        })
    })
})

export const {useFetchProductsQuery} = api
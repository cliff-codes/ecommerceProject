import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const categoryApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/products/category/"}),

    endpoints: (builder) =>  ({
        fetchProducts: builder.query({
            query: (category) => `${category}?limit=6` 
        })
    })
})

export const {useFetchProductsQuery} = categoryApi
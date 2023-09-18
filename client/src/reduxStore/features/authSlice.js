import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const authApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:1337/api/customers"}),

    endpoints: (builder) =>  ({
        registerCustomer: builder.mutation({
            query: (newCustomer) => ({
                url: '/',
                method: 'POST',
                body: newCustomer
            })
        })
    })
})

export const {useRegisterCustomerMutation} = authApi

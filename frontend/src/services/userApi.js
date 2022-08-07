import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://share-with-me-full-stack.vercel.app/api';


export const AuthenticationApi = createApi({
    reducerPath: 'Authenticationapi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
   
        createUser: builder.mutation({
            query: (myForm) => {
            return {
                    url: '/create',
                    method: 'Post',
                    body: myForm,
                    credentials: 'include',
                }
            },
        }),
        LoadUser: builder.query({
            query: () => {

                return {
                    url: '/me',
                    method: 'GET',
                    credentials: 'include'
                }
            },
       
           
        }),
        getUserDetails: builder.query({
            query: (id) => {

                return {
                    url: `/user/${id}`,
                    method: 'GET',
                    credentials: 'include'
                }
            },
       
           
        }),

        logoutUser: builder.mutation({
            query: () => {
            return {
                    url: '/logout',
                    method: 'Get',
                    credentials: 'include',
                }
            },
        }),
    

    })
});

export const {

useCreateUserMutation,
useLoadUserQuery,
useGetUserDetailsQuery,
useLogoutUserMutation
   
} = AuthenticationApi
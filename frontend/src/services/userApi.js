import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseUrl = 'https://mern-stack-photo-library.vercel.app/api';
const baseUrl = 'http://localhost:4000/api';


export const AuthenticationApi = createApi({
    reducerPath: 'Authenticationapi',
    tagTypes:['Users'],
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

            providesTags:['Users']
       
           
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
            // invalidatesTags : ['Users']
        }),
    
       
    })
});

export const {

useCreateUserMutation,
useLoadUserQuery,
useGetUserDetailsQuery,
useLogoutUserMutation
   
} = AuthenticationApi
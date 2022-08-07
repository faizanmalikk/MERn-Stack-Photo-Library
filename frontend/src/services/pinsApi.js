import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseUrl = 'https://mern-stack-photo-library.vercel.app/api';
const baseUrl = 'http://localhost:4000/api';



export const PinsApi = createApi({
    reducerPath: 'PinsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes:['Pins'],
    endpoints: (builder) => ({
   
   
        getAllpin: builder.query({
            query: ({keyword = '', searchTerm}) => {

                return {
                    url: `/pins?keyword=${keyword}&titleKeyword=${searchTerm}`,
                    method: 'GET',
                    credentials: 'include'
                }
                
            },
        providesTags : ['Pins']
           
        }),

        getPindetails: builder.query({
            query: (id) => {

                return {
                    url: `/pins/${id}`,
                    method: 'GET',
                    credentials: 'include'
                }
                
            },
        providesTags : ['Pins']
           
        }),

        savePin: builder.mutation({
            query: ({pinId : _id}) => {
            return {
                    url: '/pin/save',
                    method: 'Put',
                    body: {pinId : _id},
                    credentials: 'include',


                }
            },
            invalidatesTags : ['Pins']
        }),
        createPin: builder.mutation({
            query: (myForm) => {
            return {
                    url: '/pin/create',
                    method: 'Post',
                    body: myForm,
                    credentials: 'include',


                }
            },
            invalidatesTags : ['Pins']
        }),

        deletePin: builder.mutation({
            query: (id) => {
            return {
                    url: `/pin/${id}`,
                    method: 'Delete',
                    credentials: 'include',
                }
            },
            invalidatesTags : ['Pins']
        }),

        commentPin: builder.mutation({
            query: (myForm) => {
            return {
                    url: '/pin/comment',
                    method: 'Put',
                    body : myForm,
                    credentials: 'include',
                }
            },
            invalidatesTags : ['Pins']
        }),

        deleteComment: builder.mutation({
            query: (myForm) => {
            return {
                    url: '/comment/delete',
                    method: 'Delete',
                    body : myForm,
                    credentials: 'include',
                }
            },
            invalidatesTags : ['Pins']
        }),

        getrelatedCategorypin: builder.query({
            query: (keyword) => {

                return {
                    url: keyword && `/pins?keyword=${keyword}`,
                    method: 'GET',
                    credentials: 'include'
                }
                
            },
        providesTags : ['Pins']
           
        }),
    

    })
});

export const {

useGetAllpinQuery,
useSavePinMutation,
useDeletePinMutation,
useCreatePinMutation,
useGetPindetailsQuery,
useCommentPinMutation,
useDeleteCommentMutation,
useGetrelatedCategorypinQuery
   
} = PinsApi
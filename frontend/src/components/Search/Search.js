import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MasonaryLayout } from '..'
import { useGetAllpinQuery } from '../../services/pinsApi'
import Spinner from '../Spinner/Spinner'

const Search = ({ searchTerm, setsearchTerm }) => {


  let keyword = ''

  const { data, isFetching } = useGetAllpinQuery({keyword ,searchTerm})


  return (
    <>
      {isFetching ? <Spinner message={'Searching Pins...'} /> : (
        <>
        <Box>
          <MasonaryLayout pins={data.pins} />
        </Box>

        {data.pins.length === 0 && (
          <Typography textAlign={'center'} fontSize='30px' fontWeight={'bold'} marginTop='2rem'>No Pins Found!</Typography>
        )}
        </>
      )}

    </>
  )
}

export default Search
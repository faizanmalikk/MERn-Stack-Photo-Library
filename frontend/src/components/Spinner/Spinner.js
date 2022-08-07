import { Box,  Typography } from '@mui/material'
import React from 'react'
import {Circles} from 'react-loader-spinner'

const Spinner = ({message}) => {

  return (
    <Box display={'flex'} justifyContent='center' flexDirection={'column'}
    alignItems={'center'} margin='2rem 0' >
         
        <Circles
        color = '#00BFFF'
        height = {50}
        width = {200}
        />

        <Typography textAlign={'center'} marginTop='1rem' color='#757575'>{message}</Typography>
     </Box>
  )
}

export default Spinner
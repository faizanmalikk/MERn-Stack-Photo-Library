import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CreatePin, Feed, Navbar, PinDetails, Search, UserProfile } from '../../components'
import { Routes, Route } from 'react-router-dom'
import StatesContext from '../../context/StatesContext'
import { useLoadUserQuery } from '../../services/userApi'


const Pins = () => {

  const [searchTerm, setsearchTerm] = useState('')

  const context = useContext(StatesContext)
  const { userInfo, setuserInfo } = context
  // const { data , isFetching , refetch} = useLoadUserQuery()


  


  return (
    <Box>

      <Box>
        <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
      </Box>

      <Box >
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route exact path='/category/:keyword' element={<Feed />} />
          <Route exact path='/pindetails/:id' element={<PinDetails />} />
          <Route exact path='/create-pin' element={<CreatePin />} />
          <Route exact path='/search' element={<Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>} />
          
        </Routes>
      </Box>
    </Box>
  )
}

export default Pins
import { Box } from '@mui/material'
import React, {   useState } from 'react'
import { CreatePin, Feed, Navbar, PinDetails, Search } from '../../components'
import { Routes, Route } from 'react-router-dom'


const Pins = () => {

  const [searchTerm, setsearchTerm] = useState('')




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
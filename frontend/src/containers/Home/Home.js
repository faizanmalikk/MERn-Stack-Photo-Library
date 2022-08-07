import { Backdrop, Box, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Sidebar, Spinner, UserProfile } from '../../components'
import { Link, Route, Routes } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import img from '../../assets/logo.png'
import StatesContext from '../../context/StatesContext'
import Pins from '../Pins/Pins'
import { HomeContainer } from './style'
import { motion } from 'framer-motion';


const Home = () => {


  const context = useContext(StatesContext)
  const { userInfo, setuserInfo } = context


  const [open, setopen] = useState(false)


  



  return (
    <>

      <HomeContainer>
        <Box display={{ xs: 'none', md: 'flex' }} position='fixed' left={'0'} top='0' bottom={'0'} width={{ md: '12.5em' }}>
          <Sidebar />
        </Box>
        <Box display={{ xs: 'flex', md: 'none' }} className='mob-nav'>
          <IconButton onClick={() => setopen(!open)}>
            <Menu />
          </IconButton>
          <Link to='/'>
            <Box component={'img'} src={img} alt='logo' width={{ xs: '120px', sm: '170px' }} paddingTop='10px' />
          </Link>
          <Link to={`/user-profile/${userInfo && userInfo.user._id}`}>
            <Box component={'img'} src={userInfo && userInfo.user.image} alt='img'
              height='40px' width='40px' borderRadius={'50%'} marginTop='10px' />
          </Link>


        </Box>
        <Box>
          {open && (
            <Box>
            <motion.div
            
            animate={{ x: [-300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='myMenu'
            
            >
              <Backdrop open={open} onClick={() => setopen(false)} />

              <Sidebar open={open} setopen={setopen} />
            </motion.div>

            </Box>
          )}

        </Box>
        <Box marginLeft={{ md: '12.5em' }} width='100%'>

          <Routes>
            <Route exact path='/user-profile/:id' element={<UserProfile />} />
            <Route exact path='/*' element={<Pins />} />

          </Routes>

        </Box>
      </HomeContainer>
      
    </>
  )
}

export default Home
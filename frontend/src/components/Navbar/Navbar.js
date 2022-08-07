import { Add, Search } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { NavConatiner } from './style'
import { Link, useNavigate } from 'react-router-dom'
import StatesContext from '../../context/StatesContext'

const Navbar = ({ searchTerm, setsearchTerm }) => {

  const context = useContext(StatesContext)
  const { userInfo } = context

  const navigate = useNavigate()

  return (
    <NavConatiner>
      <Box width={'100%'} className='nav-container'>
        <TextField
          className='input-box'
          variant="standard"
          placeholder='Search'
          value={searchTerm}
          onFocus={() => navigate('/search')}
          onChange={(e) => setsearchTerm(e.target.value)}
          type='text'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            disableUnderline: true,
          }} />
        <Link to={`/user-profile/${userInfo && userInfo.user._id}`}>
          <Box component={'img'} className='image-container' src={userInfo && userInfo.user.image} display={{xs:'none',sm:'flex'}}/>
        </Link>

        <IconButton component={Link} to='/create-pin' className='add-button'>
          <Add/>
        </IconButton>
      </Box>
    </NavConatiner>
  )
}

export default Navbar
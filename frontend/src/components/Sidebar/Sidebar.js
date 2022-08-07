import React, { useContext } from 'react'
import { SidebarConatiner } from './style'
import img from '../../assets/logo.png'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { Cancel, Home } from '@mui/icons-material'
import StatesContext from '../../context/StatesContext'
import { categories } from '../CreatePin/categories'
import { Scrollbars } from 'react-custom-scrollbars-2';


const Sidebar = ({ open, setopen }) => {


  const context = useContext(StatesContext)
  const { userInfo } = context

  const handleOpen = () => {
    if (open) setopen(false)
  }



  return (
    <SidebarConatiner>

      <Link to='/' onClick={handleOpen}>
        <Box component='img' src={img} className='sidebar-img' />
      </Link>

      <Box>
        <NavLink
          style={{ marginLeft: '-6px', marginTop: '1rem',width:'101.4%' }}
          to='/'
          className={({ isActive }) => (isActive ? 'active-link' : 'unactive-link')}
          onClick={handleOpen}
        >
          <Home sx={{fontSize:'30px' }}/>
          Home
        </NavLink>

      </Box>
      <Box>
        <Typography className='categories'>Discover Categories</Typography>
        <Scrollbars style={{height : '53vh'}}>
        <Box className='categories-list' >
          {categories.map((item, i) => (
            <NavLink key={i}
              to={`/category/${item.name}`}
              className={({ isActive }) => (isActive ? 'active-link' : 'unactive-link')}
              onClick={handleOpen}
            >
              <Avatar src={item.image} sx={{marginRight:'10px'}}/>
              {item.name}
            </NavLink>
          ))}
        </Box>
        </Scrollbars>
      </Box>

      <Box component={Link} to={`/user-profile/${userInfo && userInfo.user._id}`} className='profile-container' onClick={handleOpen}>

        <Box component={'img'} src={userInfo && userInfo.user.image} className='profile-img' />
        <Typography>{userInfo && userInfo.user.name}</Typography>

      </Box>
    </SidebarConatiner>
  )
}

export default Sidebar
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StatesContext from '../../context/StatesContext'
import { useGetUserDetailsQuery, useLogoutUserMutation } from '../../services/userApi'
import { UserContainer } from './style'
import { Spinner } from '../index'
import { googleLogout } from '@react-oauth/google';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import { Logout } from '@mui/icons-material'
import { useGetAllpinQuery } from '../../services/pinsApi'
import {MasonaryLayout} from '../index'


const UserProfile = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  let keyword = ''
  let searchTerm = ''

  const context = useContext(StatesContext)
  const { userInfo, setuserInfo } = context
  const { data, isFetching } = useGetUserDetailsQuery(id)
  const [logoutUser, response] = useLogoutUserMutation()
  const { data: allpins, isFetching: allpinsLoading } = useGetAllpinQuery({keyword , searchTerm})

  const [text, setText] = useState('Created')
  const [activebutton, setActivebutton] = useState('created')
  const [pins, setPins] = useState('')

  const randomImg = 'https://source.unsplash.com/1600x900/?nature,photography,technology'

  const handleUserLogout = () => {

    logoutUser()

  }
  

  useEffect(() => {

    window.scrollTo(0,0)

    if (allpins && data) {
      if (text === 'Created') {
        const createdPins = allpins.pins.filter((item) => item.postedBy.user === data.user._id)
        setPins(createdPins)

  
      }else{

        let result = allpins.pins.filter(el => el.saves.some(value => value.user === data.user._id))
      
        setPins(result)
      }
    }

  }, [allpins, text , id])

  useEffect(() => {

    if(response.status === 'fulfilled'){

      googleLogout()
      setuserInfo('')
      window.location.reload()
      navigate('/login')

    }
   
  }, [response])
  


  


  return (
    <>
      {isFetching || allpinsLoading ? <Spinner message='Loading User...' /> : (
        <UserContainer>
          <Box className='img-container'>
            <Box component='img' src={randomImg} height='100%' width='100%' />
            <Box className='profile-img'>
              <Avatar src={data.user.image} />
            </Box>
            {data.user._id === userInfo.user._id && (
              <IconButton className='logout-btn' onClick={handleUserLogout}>
                <Logout />
              </IconButton>

            )}

          </Box>



          <Typography
            textAlign={'center'}
            marginTop={{xs:'3rem',sm:'2rem'}}
            fontWeight={'bold'}
            fontSize='30px'
          >{data.user.name}</Typography>

          <Box className='pins-button'>

            <Button
              onClick={(e) => {
                setText(e.target.textContent)
                setActivebutton('created')
              }}
              className={activebutton === 'created' ? 'activeButton' : 'unactiveButton'}>
              Created
            </Button>
            <Button
              onClick={(e) => {
                setText(e.target.textContent)
                setActivebutton('saved')
              }}
              className={activebutton === 'saved' ? 'activeButton' : 'unactiveButton'}
              disableRipple
            >
              Saved
            </Button>


          </Box>

          {pins.length > 0 ? (
            <Box margin={'2rem 0'}>
              <MasonaryLayout pins={pins}/>
            </Box>
          ) : (
            <Typography textAlign={'center'} marginTop='2rem' color='#757575'>No pins to show!</Typography>
          )}

        </UserContainer>
      )
      }
    </>
  )
}

export default UserProfile
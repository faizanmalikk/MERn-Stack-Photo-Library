import React, { useContext, useEffect } from 'react'
import { StyledBox } from './style'
import { Box } from '@mui/material'
import logo from '../../assets/logo.png'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'
import { useCreateUserMutation, useLoadUserQuery } from '../../services/userApi'
import { useNavigate } from 'react-router-dom'
import StatesContext from '../../context/StatesContext'



const Login = () => {

  const context = useContext(StatesContext)
  const { setuserInfo, userInfo } = context

  const [createUser, response] = useCreateUserMutation()
  const navigate = useNavigate()


  const getUser = (response) => {
    const decoded = jwtDecode(response.credential)

    const { name, picture: image, sub: googleId } = decoded


    const myForm = new FormData()
    myForm.set('name', name)
    myForm.set('image', image)
    myForm.set('googleId', googleId)

    createUser(myForm)


  }

  useEffect(() => {

    if(userInfo){
      navigate('/')
    }

    if (response.status === 'fulfilled') {
      setuserInfo(response.data)
    }

  }, [response , userInfo])



  return (
    <StyledBox>

      <Box
        component={'video'}
        src={'https://res.cloudinary.com/doytf8ce3/video/upload/v1659865753/Share-with-us/share_ikmueu.mp4?_s=vp-1.7.0'}
        typeof='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        className='myvideo'


      />

      <Box component={'img'} src={logo} sx={{ zIndex: '1', filter: 'brightness(0) invert(1)' }} width={{ xs: '250px', sm: '300px' }} />

      <Box className='sign'>
        <GoogleLogin
          size='large'
          shape='pill'
          onSuccess={(response) => getUser(response)}
          onError={() => console.log('error')}
        />
      </Box>
    </StyledBox>
  )
}

export default Login
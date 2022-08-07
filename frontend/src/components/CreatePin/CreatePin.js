import React, { useContext, useEffect, useState } from 'react'
import { FormContaner, StyledBox } from './style'
import StatesContext from '../../context/StatesContext'
import { Box, Button, CircularProgress, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Cancel, CloudUpload } from '@mui/icons-material'
import { categories } from './categories'
import { useCreatePinMutation } from '../../services/pinsApi'
import { useNavigate } from 'react-router-dom'

const CreatePin = () => {

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: '250px',
        position: 'absolute',
        bottom: '0',
        right: '-100%',

      },
      disableUnderline: true,
    },
  };

  const context = useContext(StatesContext)
  const { userInfo } = context
  const [createPin, response] = useCreatePinMutation()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [destination, setDestination] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [imageError, setimageError] = useState(false)

  const handleImgChange = (e) => {


    const selectedFile = e.target.files[0];

    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff' || selectedFile.type === 'image/jpeg') {
      
      setimageError(false)
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result)

        }
      }
      reader.readAsDataURL(e.target.files[0])
    }else{
      setimageError(true)
    }


  }

  const handleImgClick = (e) => {
    setimageError(false)
    e.stopPropagation()
    setImage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    const myForm = new FormData()
    myForm.set('title', title)
    myForm.set('about', about)
    myForm.set('destination', destination)
    myForm.set('category', category)
    myForm.append('image', image)

    createPin(myForm)


  }

  useEffect(() => {

    if(response.status === 'fulfilled'){
      setImage('')
      setimageError(false)
      navigate('/')
    }

    
  
  }, [response])
  

  return (


    <StyledBox>
      <Box className='container'>
        <Box className='img-container' sx={{ position: 'relative' }}>

          <Box className='img-con' >
            {!image.length ? (
              <Box component={'label'} display='flex' flexDirection={'column'} alignItems='center' sx={{ cursor: 'pointer' }}>
                <CloudUpload />
                <Typography>Click To Upload</Typography>
                {imageError && (

                   <Typography color='red' paddingTop={'1rem'}>Upload an Image</Typography>
                )}
                <Box
                  component={'input'}
                  type={'file'}
                  required
                  name='upload-img'
                  sx={{ width: '0', height: '0' }}
                  onChange={(e) => handleImgChange(e)}
                />
              </Box>

             

            ) : (
              <Box height='10rem' width='50%' padding={'10px'} >
                <Box component={'img'} src={image} height='100%' width='100%' />
                <IconButton className='del-img'
                  onClick={(e) => handleImgClick(e)}

                >
                  <Cancel sx={{ fontSize: '30px', color: 'red' }} />

                </IconButton>

              
              </Box>
            )}


          </Box>
        </Box>
        <FormContaner onSubmit={(e) => handleSubmit(e)}>

          <TextField
            variant="standard"
            placeholder='Add your title here'
            name='title'
            type={'text'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            InputProps={{
              disableUnderline: true,
            }}
          />

          <Box className='profile-container'>

            <Box component={'img'} src={userInfo && userInfo.user.image} className='profile-img' />
            <Typography>{userInfo && userInfo.user.name}</Typography>

          </Box>

          <TextField
            variant="standard"
            placeholder='What is your pin about'
            name='about'
            type={'text'}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            InputProps={{
              disableUnderline: true,
            }}
          />
          <TextField
            variant="standard"
            placeholder='Add a destination link'
            name='destination'
            required
            type={'text'}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            InputProps={{
              disableUnderline: true,
            }}
          />

          <FormControl fullWidth focused={false}>
            <InputLabel id="demo-simple-select-label">Pin Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              name='category'

              MenuProps={MenuProps}
              value={category}
              label="Pin Category"
              InputProps={{
                disableUnderline: true,
              }}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((value, i) => (
                <MenuItem value={value.name} key={i}>{value.name}</MenuItem>
              ))}


            </Select>
          </FormControl>

          <Button variant="contained" color='error' type='submit' disableRipple sx={{ borderRadius: '10px' }}>{response.isLoading ? (
            <CircularProgress sx={{color:'white'}} />
          ):'Save Pin'}</Button>

        </FormContaner>
      </Box>
    </StyledBox>
  )
}

export default CreatePin
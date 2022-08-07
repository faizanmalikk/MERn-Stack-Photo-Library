import { CallMade, Delete, Download } from '@mui/icons-material'
import { Box, IconButton, Button, Typography, Avatar } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledBox } from './style'
import { saveAs } from 'file-saver'
import StatesContext from '../../context/StatesContext'
import { useDeletePinMutation, useSavePinMutation } from '../../services/pinsApi'
import {Spinner} from '../index'


const Pins = ({ pins: { image, _id, saves, destination , postedBy } }) => {

  const context = useContext(StatesContext)
  const { userInfo } = context
  const navigate = useNavigate()

  const [isHovered, setisHovered] = useState(false)
  const [savePin, response] = useSavePinMutation()
  const [deletePin, responseInfo] = useDeletePinMutation()


  const downloadImage = (e) => {

    e.stopPropagation()
    saveAs(image.url, 'image.jpg')
  }

  const alreadySaved = !!(saves && saves.filter((item) => item.user === userInfo.user._id)).length

  const handleSave = (e, _id) => {

    e.stopPropagation()
    savePin({ pinId: _id })

  }

  const handledelete = (e, _id) => {

    e.stopPropagation()
    deletePin(_id)

  }



  return (
    <>

    {responseInfo.isLoading ? (
      <Spinner message={'Deleting Pin...'}/>
    ) : (
    <StyledBox>
    <Box
      onClick={() => navigate(`/pindetails/${_id}`)}
      style={{ position: 'relative' }} maxWidth='300px'
    >

      <Box component={'img'} src={image.url} alt='Pin image'
        width={'100%'}
        sx={{ cursor: 'pointer' }}
        onMouseEnter={() => setisHovered(true)}
        onMouseOut={() => setisHovered(false)} />


      {isHovered && (
        <>
          <IconButton className='down-icon'
            onMouseEnter={() => setisHovered(true)}
            onClick={(e) => downloadImage(e)}

          >

            <Download sx={{ fontSize: '30px' }} />

          </IconButton>
          {alreadySaved ? (
            <Button className='save-btn' style={{ opacity: '0.9' }} onMouseEnter={() => setisHovered(true)}>{saves.length} Saved</Button>
          ) : (
            <Button className='save-btn'
              onMouseEnter={() => setisHovered(true)}
              onClick={(e) => handleSave(e, _id)}
            >Save</Button>
          )}
          {destination && (
            <Box component={'a'}
              className='link-container'
              href={destination}
              onClick={(e) => e.stopPropagation()}
              target='_blank'
              rel='noreferrer'
              onMouseEnter={() => setisHovered(true)}
            >
              <CallMade className='call-icon' />
              <Typography>{destination.length > 15 ? `${destination.slice(0, 15)}...`: destination}</Typography>
            </Box>
          )}

          {postedBy.user === userInfo.user._id && (
            <IconButton className='del-pin'
              onMouseEnter={() => setisHovered(true)}
              onClick={(e) => handledelete(e, _id)}

            >

              <Delete sx={{ fontSize: '30px' }} />

            </IconButton>
          )}



        </>
      )}


    </Box>

   <Link to={`/user-profile/${postedBy.user}`} className='postedBy'>
   <Avatar src={postedBy.image} />
   <Typography>{postedBy.name}</Typography>
   </Link>
  </StyledBox>
    )}

    </>
  )
}

export default Pins
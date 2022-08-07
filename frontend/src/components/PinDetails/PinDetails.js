import { Delete, Download } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCommentPinMutation, useDeleteCommentMutation, useGetPindetailsQuery, useGetrelatedCategorypinQuery } from '../../services/pinsApi'
import Spinner from '../Spinner/Spinner'
import { StyledBox } from './style'
import { saveAs } from 'file-saver'
import StatesContext from '../../context/StatesContext'
import { MasonaryLayout } from '..'


const PinDetails = () => {

  const { id } = useParams()
  const [keyword, setKeyword] = useState()
  const [comment, setComment] = useState('')
  const [categoryLoading, setcategoryLoading] = useState(true)
  const [categorydata, setCategorydata] = useState('')


  const { data, isFetching } = useGetPindetailsQuery(id)
  const [createComment, response] = useCommentPinMutation()
  const [deleteComment, responseInfo] = useDeleteCommentMutation()
  const { data: allPins, isFetching: allPinsLoading } = useGetrelatedCategorypinQuery(keyword)

  const context = useContext(StatesContext)
  const { userInfo } = context

  const downloadImage = (e) => {

    e.stopPropagation()
    saveAs(data && data.pins.image.url, 'image.jpg')
  }

  const handleCommentCreate = (e) => {

    e.preventDefault()

    const myForm = new FormData()

    myForm.set('pinId', id)
    myForm.set('comment', comment)

    createComment(myForm)
  }

  const handleCommentDelete = (e, _id) => {

    e.preventDefault()

    const myForm = new FormData()

    myForm.set('pinId', id)
    myForm.set('commentId', _id)

    deleteComment(myForm)
  }

  useEffect(() => {
    if (data) {

      setKeyword(data.pins.category)

      if (allPins && allPins.pins) {

        let myData = allPins.pins.filter((pindata) => pindata._id !== data.pins._id)
        setCategorydata(myData)
        setcategoryLoading(false)
    
      }

    }


  }, [data, allPins])


  return (
    <>
      {isFetching ? <Spinner /> : (
        <>
          <StyledBox>
            <Box flex={{ md: '0.60' }}>
              <Box component='img' src={data.pins.image.url} width='100%' sx={{ borderRadius: '10px 10px 20px 20px' }} />
            </Box>
            <Box flex={{ md: '1' }} className='pin-info'>
              <Box className='down-container'>
                <IconButton className='down-icon'
                  onClick={(e) => downloadImage(e)}
                >
                  <Download sx={{ fontSize: '30px' }} />

                </IconButton>
                <Typography
                  component='a'
                  href={data.pins.destination}
                  target='_blank'
                  rel='noreferrer'
                >
                  {data.pins.destination.length > 20 ? `${data.pins.destination.slice(0, 20)}...` : data.pins.destination}
                </Typography>
              </Box>
              <Typography fontSize='30px' fontWeight={'bold'}>{data.pins.title}</Typography>

              <Typography fontSize='20px' marginTop='-10px' color='#757575'>{data.pins.about}</Typography>

              <Link to={`/user-profile/${data.pins.postedBy.user}`} className='postedBy'>
                <Avatar src={data.pins.postedBy.image} />
                <Typography>{data.pins.postedBy.name}</Typography>
              </Link>

              <Typography fontSize='25px' marginTop={'10px'}>Comments</Typography>
              {data.pins.comment.length > 0 && data.pins.comment.map((item, i) => (
                <Box display='flex' justifyContent={'space-between'} key={i}>
                  <Box key={i} className='comment-con'>
                    <Avatar src={item.image} />
                    <Box>
                      <Typography fontWeight={'bold'}>{item.name}</Typography>
                      <Typography color='#757575'>{item.comment}</Typography>
                    </Box>
                  </Box>
                  {userInfo.user._id === item.user && (
                    <IconButton onClick={(e) => handleCommentDelete(e, item._id)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}

              <Box component={'form'} onSubmit={(e) => handleCommentCreate(e)} className='com-sec'>
                <Avatar src={userInfo.user.image} />
                <TextField
                  variant="standard"
                  placeholder='Comment here'
                  name='comment'
                  type={'text'}
                  required

                  onChange={(e) => setComment(e.target.value)}

                />
                <Button variant='contained' type='submit'>Post</Button>
              </Box>

            </Box>
          </StyledBox>

          {categorydata.length > 0 && (
            <Box padding={'1rem 0'}>
              <Typography
                fontSize='25px'
                marginTop={'1rem'}
                fontWeight='bold'
                textAlign={'center'}
              >More Like This
              </Typography>

            <MasonaryLayout pins={categorydata}/>

            </Box>
          )}

        </>
      )}

    </>
  )
}

export default PinDetails
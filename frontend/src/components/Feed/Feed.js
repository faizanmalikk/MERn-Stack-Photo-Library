import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StatesContext from '../../context/StatesContext'
import { useGetAllpinQuery } from '../../services/pinsApi'
import MasonaryLayout from '../MasonaryLayout/MasonaryLayout'
import Spinner from '../Spinner/Spinner'

const Feed = () => {

  const { keyword } = useParams()

  let searchTerm = ''

  const { data, isFetching } = useGetAllpinQuery({ keyword, searchTerm })

  const context = useContext(StatesContext)
  const { setmyPins } = context

  useEffect(() => {

    if (data) {
      setmyPins(data)
    }

  }, [data])


  return (
    <>
      {isFetching ? (
        <Spinner message={'We are adding new ideas to you feed!'} />

      ) : (
        <Box>
          <MasonaryLayout pins={data && data.pins} />
        </Box>
      )}

    </>
  )
}

export default Feed
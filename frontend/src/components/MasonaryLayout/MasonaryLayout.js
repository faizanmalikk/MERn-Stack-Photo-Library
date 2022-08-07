
import React from 'react'
import Masonry from 'react-masonry-css'
import {Pins} from '../index'
import { StyledBox } from './style'

const MasonaryLayout = ({pins}) => {

    const breakpointObj = {
        default: 4,
        3000: 6,
        2000: 5,
        1500: 4,
        1200: 3,
        1000: 2,
        600: 1
    }

    return (
        <StyledBox>
        <Masonry breakpointCols={breakpointObj}  className='mas-con'>
    {pins && pins.map((item,i)=>(

        <Pins key={i} pins={item}/>
    ))}
        </Masonry>
        </StyledBox>
    )
}

export default MasonaryLayout
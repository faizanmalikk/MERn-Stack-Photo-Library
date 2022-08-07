import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({

    '.mas-con':{
        display : 'flex',
        padding : '0 30px',
  
       
    },
    [theme.breakpoints.down('md')]:{
        display : 'flex',
        justifyContent : 'center'
    }
   

}))


export {
    StyledBox
}
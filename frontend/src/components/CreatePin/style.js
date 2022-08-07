import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  
    overflow : 'hidden',
    '.container': {
        backgroundColor: 'white',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
          overflow : 'hidden',
        padding: '10px',
        [theme.breakpoints.down('md')]:{
          width : '70%'
        },
        [theme.breakpoints.down('sm')]:{
          width : '93%'
        },
    },
 
    '.img-container': {

        width: '100%',
        overflow : 'hidden',

        backgroundColor: theme.palette.grey[100]
    },
    '.img-con': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px dotted black',
        margin: '10px',
        height: '10rem',

    },
    '.del-img': {
        position: 'absolute',
        top: '15px',
        right: '20px',
        height: '40px',
        width: '40px',
        zIndex : '1',
     

    },

}))
const FormContaner = styled('form')(({ theme }) => ({
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    '.MuiTextField-root': {
        backgroundColor: '#f2f7fb',
        padding: '10px 25px',
        transition: 'all 0.4s ease-in-out',
        fontFamily: 'Roboto',
        borderRadius: '10px',
        fontSize: '26px',
        width: '100%',

        '&:hover': {
            boxShadow: '0 0 25px #f2f7fb'
        },

    },
    '.profile-container': {
        display: 'flex',
        alignItems: 'center',
        gap: '17px',
        '.MuiTypography-root': {
            color: theme.palette.grey[800],
            fontWeight: '800',
            fontSize: '22px',
            paddingRight: '5px'
        }
    },

    '.profile-img': {
        height: '50px',
        width: '50px',
        borderRadius: '50%'
    },

    "& .MuiOutlinedInput-input": {
        color: theme.palette.grey[900],
        backgroundColor : '#f2f7fb',
        transition: 'all 0.4s ease-in-out',
        fontFamily: 'Roboto',
        borderRadius: '10px',
        fontSize: '26px',

        '&:hover': {
            boxShadow: '0 0 25px #f2f7fb'
        },
      },
      "& .MuiInputLabel-root": {
        color: theme.palette.grey[500]
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        color: theme.palette.grey[500]
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent"
      },







}))


export {
    StyledBox,
    FormContaner
}
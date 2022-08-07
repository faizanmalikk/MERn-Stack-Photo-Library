
import { Box, styled } from "@mui/material";


const UserContainer = styled(Box)(({ theme }) => ({

    '.img-container':{
        width : '100%',
        height : '450px',
        position : 'relative',
        [theme.breakpoints.down('md')]:{
            height : '410px',
        },
        [theme.breakpoints.down('sm')]:{
            height : '310px',
        }
    },
    '.profile-img':{
        position : 'absolute',
        bottom : '-40px',
        width : '100%',
        '.MuiAvatar-root':{
            height : '90px',
            width : '90px',
            margin :'0 auto',
            boxShadow : '0 0 30px rgba(0,0,0,0.3)'
        }
    },
    '.logout-btn':{
        position : 'absolute',
        right : '15px',
        top : '10px',
        color : 'black',
        backgroundColor : 'white'
    },
    '.pins-button':{
        display : 'flex',
        justifyContent:'center',
        gap : '10px',
        marginTop:'1rem'

    },
    '.unactiveButton':{
        color : 'black',
        textTransform : 'unset',
        borderRadius : '20px',
        fontSize : '20px',
       
    },
    '.activeButton':{
        color : 'white',
        textTransform : 'unset',
        backgroundColor : theme.palette.error.main,
        borderRadius : '20px',
        fontSize : '20px',
        '&:hover':{
            backgroundColor : theme.palette.error.main, 
            color : 'white', 
        }
       
    }


 

}))

export {
    UserContainer
}
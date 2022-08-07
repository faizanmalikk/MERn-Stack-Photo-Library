import { Box, styled } from "@mui/material";


const NavConatiner = styled(Box)(({ theme }) => ({

    display: 'flex',
    width: '100%',
    padding: '20px 30px',
    '.nav-container': {
        width: '100%',
        display: 'flex',
        gap: '10px',
        alignItems : 'center'
     
    },
    '.input-box': {
        backgroundColor: 'white',
        width: '100%',
        transition: 'all 0.4s ease-in-out',
        padding: '3px 10px',
        borderRadius: '10px',
        diplay: 'flex',
        justifyContent: 'center',
        height: '2em',
        '&:hover': {
            boxShadow: '0 0 30px rgba(0,0,0,0.1)'
        }
    },
    '.image-container': {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
    },
    '.add-button':{
        backgroundColor : theme.palette.grey[400],
        height: '50px',
        width: '50px',
        transition : 'all 0.4s ease-in-out',
        '&:hover':{
            backgroundColor : theme.palette.grey[500],

        },
        [theme.breakpoints.down('sm')]:{
            height: '35px',
            width: '35px', 
        }
        
    }
}))


export {
    NavConatiner
}
import { Box, styled } from "@mui/material";


const HomeContainer = styled(Box)(({ theme }) => ({

    display : 'flex',
    backgroundColor : '#f2f7fb',
    minHeight : '100vh',
    width : '100vw',
    [theme.breakpoints.down('md')]:{
        flexDirection : 'column'
    },

    '.mob-nav':{
        position : 'sticky',
        top:'0',
        width : '100vw',
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        justifyContent : 'space-between',
        padding : '10px 10px',
        boxShadow : '0 0 30px rgba(0,0,0,0.1)'

    },
    '.myMenu':{
        backgroundColor: 'white', 
        position: 'fixed', 
        top: '0', 
        left: '0',
        Bottom:'0',
        height:'100vh',
        width : '50%',
        zIndex : '5',
        [theme.breakpoints.down('sm')]:{
            width : '65%'
        }
 
    
      },

}))

export {
    HomeContainer
}
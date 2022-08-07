import { Box, styled } from "@mui/material";


const SidebarConatiner = styled(Box)(({ theme }) => ({

    backgroundColor: 'white',
    width: '100%',
    paddingLeft: '16px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        height: '100vh',
        paddingRight: '5px'
    },

    '.cancel-button': {

        justifyContent: 'flex-end',
        marginTop: '10px',
        marginRight: '5px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '6px'
        }
    },

    '.sidebar-img': {
        width: '8rem',

        paddingTop: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.4s ease-in-out',
        [theme.breakpoints.down('md')]: {
            width: '10rem',
            paddingTop : '1rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            paddingTop : '2rem'
        }

    },

    '.active-link': {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: theme.palette.grey[900],
        width: '100%',
        borderRight: '3px solid black',
        fontSize: '22px',
        fontWeight: 'bold',

    },
    '.unactive-link': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        textDecoration: 'none',
        color: theme.palette.grey[700],
        width: '100%',
        fontSize: '22px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            color: theme.palette.grey[900],
            cursor: 'pointer'
        }

    },



    '.categories': {
        fontSize: '22px',
        color: theme.palette.grey[500],
        marginTop: '1rem',
        paddingRight: '5px',
        [theme.breakpoints.down('md')]:{
            marginBottom:'1rem'
        }

    },
    '.categories-list': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '0.5rem'
    },

    '.profile-container': {
        position: 'absolute',
        bottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
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
    }

}))


export {
    SidebarConatiner,

}
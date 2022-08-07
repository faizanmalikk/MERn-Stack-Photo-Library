import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({

    padding:'10px',

    '.down-icon': {
        position: 'absolute',
        left: '10px',
        top: '10px',
        backgroundColor: theme.palette.grey[400],
        height: '40px',
        width: '40px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            backgroundColor: 'white'
        }

    },
    '.save-btn': {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: theme.palette.error.light,
        color: 'white',
        opacity: '0.7',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: 'bold',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            opacity: '0.9',
            backgroundColor: theme.palette.error.light,
        }

    },
    '.link-container': {
        position: 'absolute',
        bottom: '20px',
        left: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: theme.palette.grey[400],
        padding: '5px 10px',
        borderRadius: '20px',
        textDecoration: 'none',
        transition: 'all 0.4s ease-in-out',
        '.MuiTypography-root': {
            fontSize: '13px',
            fontWeight: '600',
            color: theme.palette.grey[900]
        },
        '&:hover': {
            backgroundColor: 'white'
        }
    },

    '.call-icon': {
        color: 'white',
        backgroundColor: theme.palette.grey[700],
        borderRadius: '50%',
        fontSize: '17px'
    },
    '.del-pin': {
        position: 'absolute',
        bottom: '20px',
        right: '10px',
        backgroundColor: theme.palette.grey[400],
        height: '40px',
        width: '40px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            backgroundColor: 'white'
        }
    },

    '.postedBy': {
        display: 'flex',
        gap: '10px',
        textDecoration: 'none',
        color: theme.palette.grey[800]
    }




}))


export {
    StyledBox
}
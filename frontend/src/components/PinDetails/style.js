import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({

    margin: '0 30px',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '15px',

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },

    '.pin-info': {
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    '.down-container': {
        display: 'flex',
        justifyContent: 'space-between',

        '.MuiTypography-root': {
            textDecoration: 'none',
            color: theme.palette.grey[600],
            transition: 'all 0.4s ease-in-out',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '&:hover': {
                color: theme.palette.grey[700]
            }
        }

    },

    '.down-icon': {
        backgroundColor: theme.palette.grey[300],
        height: '40px',
        width: '40px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            backgroundColor: theme.palette.grey[400]
        }

    },
    '.postedBy': {
        display: 'flex',
        gap: '10px',
        textDecoration: 'none',
        marginTop: '5px',
        color: theme.palette.grey[800]
    },
    '.comment-con': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    '.com-sec': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '.MuiTextField-root': {

            padding: '10px 25px',
            transition: 'all 0.4s ease-in-out',
            fontFamily: 'Roboto',
            borderRadius: '20px',
            width: '100%'

        },
        '.MuiButton-root': {
            borderRadius: '20px',
            fontSize: '15px',
            padding: '10px 15px'
        }
    },

}))


export {
    StyledBox
}
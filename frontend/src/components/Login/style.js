const { styled, Box } = require("@mui/material");

const StyledBox = styled(Box)(({ theme }) => ({

 display:'flex',
 alignItems : 'center',
 flexDirection : 'column',
 justifyContent : 'center',
 height:'100vh',
 width:'100vw',
 position:'relative',
'.myvideo':{
position : 'absolute',
top : '0',
left : '0',
bottom : '0',
right : '0',
width : '100vw',
height : '100vh',
objectFit : 'cover'

},
'.sign':{

 zIndex : '1',
 marginTop : '1rem'
}

  }))


  export {
    StyledBox
  }
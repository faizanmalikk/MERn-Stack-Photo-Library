import { Box, CircularProgress, CssBaseline } from "@mui/material"
import { useContext, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import webFont from 'webfontloader'
import { Login } from './components/index'
import { Home } from './containers/index'
import { useLoadUserQuery } from "./services/userApi";
import StatesContext from "./context/StatesContext";





function App() {


  const context = useContext(StatesContext)
  const { setuserInfo } = context
  const { data, isFetching,isError } = useLoadUserQuery()

  const navigate = useNavigate()



  useEffect(() => {

    webFont.load({
      google: {
        families: ['Roboto']
      }
    })

    if (data) {
      setuserInfo(data)
    }

   

  }, [data])


  useEffect(() => {

    if(isError){
      navigate('/login')
    }
    
  }, [isError])
  



  return (
    <>
      {isFetching ? (
            <Box display={'flex'} justifyContent='center' 
            alignItems={'center'} height={'100vh'} >
                 
                 <CircularProgress size = {80}/>
             </Box>
      ) : (
        <Box maxWidth='100vw' overflow={'hidden'}>
        <GoogleOAuthProvider clientId='852054508172-d8q29tuv0i98r8ghqss3rsf52q42s3jm.apps.googleusercontent.com' >
          <CssBaseline />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/*" element={<Home />} />
          </Routes>
        </GoogleOAuthProvider>
        </Box>
      )}
    </>
  );
}

export default App;

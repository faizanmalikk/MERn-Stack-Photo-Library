import React,{ useState } from "react";
import StatesContext from "./StatesContext";
const OverAllStates = (props)=>{

  const [userInfo, setuserInfo] = useState('')
  const [myPins, setmyPins] = useState('')

  return(
       <StatesContext.Provider value={{userInfo,setuserInfo,myPins, setmyPins}}>
           {props.children}
       </StatesContext.Provider>
    )
}
export default OverAllStates;
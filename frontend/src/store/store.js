import { configureStore} from '@reduxjs/toolkit'
import { PinsApi } from '../services/pinsApi';
import { AuthenticationApi } from '../services/userApi';

const store = configureStore({
    reducer : {
        [AuthenticationApi.reducerPath]  : AuthenticationApi.reducer,
        [PinsApi.reducerPath]  : PinsApi.reducer,
      
    
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(AuthenticationApi.middleware)
    .concat(PinsApi.middleware)
})

export default store;
import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from './features/loginSlice'
import formSlice from './features/formSlice'
import userInfoSlice from './features/userInfoSlice' 

const rootReducer = combineReducers({
  login: loginReducer,
  formFeature: formSlice,
  userInfo: userInfoSlice 
})

export default rootReducer

// reducer.js
import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from './features/loginSlice'
import formSlice from './features/formSlice'

const rootReducer = combineReducers({
  login: loginReducer,
  formFeature: formSlice
})

export default rootReducer

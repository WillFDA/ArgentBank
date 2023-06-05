// reducer.js
import { combineReducers } from '@reduxjs/toolkit'
import myFeatureReducer from './features/myFeatureSlice'

const rootReducer = combineReducers({
  myFeature: myFeatureReducer
})

export default rootReducer

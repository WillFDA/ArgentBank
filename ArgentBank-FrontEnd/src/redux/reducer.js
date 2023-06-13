import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import formSlice from "./features/formSlice";
import userInfoSlice from "./features/userInfoSlice";
import transactions from "./features/transactions";

const rootReducer = combineReducers({
  login: loginReducer,
  formFeature: formSlice,
  userInfo: userInfoSlice,
  transactions: transactions,
});

export default rootReducer;

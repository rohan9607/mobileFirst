import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth"
import mainReducer from "./main"

const rootReducer = combineReducers({
    auth:authReducer,
    main:mainReducer
})

export default rootReducer
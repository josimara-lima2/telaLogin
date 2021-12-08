import { combineReducers } from "@reduxjs/toolkit";
import listReducer from './reducers/usuarios'
const rootReducer = combineReducers({
    usuarios:listReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

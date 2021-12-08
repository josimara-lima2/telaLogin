import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const UseAppDispatch = () => useDispatch<AppDispatch>()
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
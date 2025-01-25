import { configureStore } from "@reduxjs/toolkit"
import { nameInitialReducer } from "./reducer"

export interface initialStateType {
    initialName: string
}

export const initialState: initialStateType = {
    initialName: ""
}

export const store = configureStore({
    reducer: nameInitialReducer

})
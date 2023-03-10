import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CalculatorState {
    isRuntime: boolean
}

const initialState: CalculatorState = {
    isRuntime: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setRuntime: (state, {payload: isRuntime}: PayloadAction<boolean>) => {
            state.isRuntime = isRuntime
        },
    },
})

export const {setRuntime} = appSlice.actions

export default appSlice.reducer
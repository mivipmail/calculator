import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./appSlice";
import canvasReducer from "./canvasSlice";
import calculatorReducer from "./calculatorSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        canvas: canvasReducer,
        calculator: calculatorReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
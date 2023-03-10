import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CanvasState {
    sectionIds: string[]
}

const initialState: CanvasState = {
    sectionIds: [],
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        add: (state, { payload: { sectionId, position } }: PayloadAction<{sectionId: string, position: number}>) => {
            state.sectionIds.splice(position, 0, sectionId)
            //state.sectionIds.push(sectionId)
        },
        remove: (state, {payload: sectionId}: PayloadAction<string>) => {
            state.sectionIds = state.sectionIds.filter(el => el !== sectionId)
        },
    },
})

export const { add, remove } = canvasSlice.actions

export default canvasSlice.reducer
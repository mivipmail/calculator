import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ButtonType} from "../consts";


export interface ExpressionType {
    operand1: ButtonType[]
    operand2: ButtonType[]
    operator: ButtonType|null
}
export interface CalculatorState {
    expression: ExpressionType
    displayText: string|null
}

const initialState: CalculatorState = {
    expression: {
        operand1: [],
        operand2: [],
        operator: null,
    },
    displayText: null
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        add: (state, {payload: expression}: PayloadAction<ExpressionType>) => {
            state.expression = {
                ...expression,
                operand1: [...expression.operand1],
                operand2: [...expression.operand2],
            }
        },
        clear: (state) => {
            state.expression = initialState.expression
        },
        setDisplayText: (state, { payload: displayText }: PayloadAction<string|null>) => {
            state.displayText = displayText
        },
    },
})

export const { add, clear, setDisplayText } = calculatorSlice.actions

export default calculatorSlice.reducer
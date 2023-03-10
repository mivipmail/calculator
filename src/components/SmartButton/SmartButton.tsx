import React from 'react';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {add, clear, ExpressionType, setDisplayText} from "../../redux/calculatorSlice";
import {buttonsData, ButtonType, MAX_DIGITS} from "../../consts";
import {processor} from "../../lib/processor";


type PropsType = {
    button: ButtonType
    disabled?: boolean
}
const SmartButton: React.FC<PropsType> = ({button, disabled = true}) => {
    let expression = useSelector((state: RootState) => state.calculator.expression)
    const dispatch = useDispatch()

    const onClick = (btn: ButtonType) => {
        switch (btn.section) {
            case 'digit':
                let currentOperandIndex: keyof ExpressionType = (expression.operator) ? 'operand2' : 'operand1'

                if (btn.label === ',' &&
                    expression[currentOperandIndex].find((el: ButtonType) => el.label === ','))
                    return

                if (expression[currentOperandIndex].length < MAX_DIGITS) {
                    let newCurrentOperandValue = (btn.label === ',' && expression[currentOperandIndex].length === 0)
                        ? [
                            ...expression[currentOperandIndex],
                            buttonsData.digit.find(el => el.label === '0'),
                            btn
                        ]
                        : [...expression[currentOperandIndex], btn]
                    dispatch(add({
                        ...expression,
                        [currentOperandIndex]: newCurrentOperandValue
                    }))
                    dispatch(setDisplayText(newCurrentOperandValue.map((el: any) => el.label).join('')))
                }
                break


            case 'operator':
                if (expression.operand1.length) {
                    if (!expression.operand2.length)
                        dispatch(add({
                            ...expression,
                            operator: btn
                        }))
                    else {
                        let result = processor.calculate(expression)
                        if (!result) {
                            dispatch(clear())
                            dispatch(setDisplayText('Не определено'))
                            return
                        }
                        dispatch(add({
                            ...expression,
                            operand1: [...result],
                            operand2: [],
                            operator: btn,
                        }))
                        dispatch(setDisplayText(result.map((el: ButtonType) => el.label).join('')))
                    }
                }
                break


            case 'equal':
                if (expression.operand1.length &&
                    expression.operand2.length &&
                    expression.operator) {
                    let result = processor.calculate(expression)
                    if (!result) {
                        dispatch(clear())
                        dispatch(setDisplayText('Не определено'))
                        return
                    }
                    dispatch(add({
                        ...expression,
                        operand1: [...result],
                        operand2: [],
                        operator: null,
                    }))
                    dispatch(setDisplayText(result.map((el: ButtonType) => el.label).join('')))
                }
                break
        }
    }


    return (
        <Button variant={button.style}
                className={`btn-w-${button.width}`}
                disabled={disabled}
                onClick={() => onClick(button)}>
            {button.label}
        </Button>
    );
};

export default SmartButton;
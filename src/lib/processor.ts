import {buttonsData, ButtonType, MAX_DIGITS} from "../consts";
import {ExpressionType} from "../redux/calculatorSlice";

export const processor = {
    round(result: number): number {
        let dividerIndex = result.toString().indexOf('.')
        if (dividerIndex > 0) {
            const digits = (dividerIndex < MAX_DIGITS) ? (MAX_DIGITS - dividerIndex) : 0
            let arraySum = result.toFixed(digits).split('')

            let i = arraySum.length
            while (arraySum[i] === '0') {
                arraySum.pop()
                i--;
            }

            result = Number(arraySum.join(''))
        }
        return result
    },

    calculate(expression: ExpressionType): ButtonType[]|null {
        const expressionArray = expression.operand1.map(el => el.value)
            .concat(
                expression.operator?.value as string,
                expression.operand2.map(el => el.value)
            )

        // eslint-disable-next-line no-eval
        let result = eval(expressionArray.join(''))

        if (!isFinite(result))
            return null

        result = this.round(result)

        if (result.toString().length > MAX_DIGITS)
            return null

        let arraySum = result.toString().split('')
        return arraySum.map((value: string) => buttonsData.digit.find(el => el.value === value))
    },
}
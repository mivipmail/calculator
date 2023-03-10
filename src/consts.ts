export type ButtonType = {
    id: number
    section: string
    label: string
    value: string
    width: number
    style?: string
}

export const buttonsData = {
    display: [
        {id: 17, section: 'display', label: '0', value: '0', width: 12, style: ''},
    ] as ButtonType[],

    operator: [
        {id:  1, section: 'operator', label: '/', value: '/', width: 3, style: 'outline-secondary'},
        {id:  2, section: 'operator', label: 'x', value: '*', width: 3, style: 'outline-secondary'},
        {id:  3, section: 'operator', label: '-', value: '-', width: 3, style: 'outline-secondary'},
        {id:  4, section: 'operator', label: '+', value: '+', width: 3, style: 'outline-secondary'},
    ] as ButtonType[],

    digit: [
        {id:  5, section: 'digit', label: '7', value: '7', width: 4, style: 'outline-secondary'},
        {id:  6, section: 'digit', label: '8', value: '8', width: 4, style: 'outline-secondary'},
        {id:  7, section: 'digit', label: '9', value: '9', width: 4, style: 'outline-secondary'},
        {id:  8, section: 'digit', label: '4', value: '4', width: 4, style: 'outline-secondary'},
        {id:  9, section: 'digit', label: '5', value: '5', width: 4, style: 'outline-secondary'},
        {id: 10, section: 'digit', label: '6', value: '6', width: 4, style: 'outline-secondary'},
        {id: 11, section: 'digit', label: '1', value: '1', width: 4, style: 'outline-secondary'},
        {id: 12, section: 'digit', label: '2', value: '2', width: 4, style: 'outline-secondary'},
        {id: 13, section: 'digit', label: '3', value: '3', width: 4, style: 'outline-secondary'},
        {id: 14, section: 'digit', label: '0', value: '0', width: 8, style: 'outline-secondary'},
        {id: 15, section: 'digit', label: ',', value: '.', width: 4, style: 'outline-secondary'},
    ] as ButtonType[],

    equal: [
        {id: 16, section: 'equal', label: '=', value: '=', width: 12, style: 'primary'},
    ] as ButtonType[],
}

export const MAX_DIGITS = 16;
export const CANVAS_ID = '100';

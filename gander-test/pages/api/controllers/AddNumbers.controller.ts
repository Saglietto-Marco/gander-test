export default class AddNumbersController {
    addTwoNumbers(body: any): number {
        body = JSON.parse(body)
        console.log('body===', body)
        if (body['firstNumber'] && body['secondNumber']) {
            console.log('body===', body)
            let firstNumber = body['firstNumber']
            let secondNumber = body['secondNumber']
            if (/^-?\d+$/.test(firstNumber) && /^-?\d+$/.test(secondNumber)) {
                return JSON.parse(firstNumber) + JSON.parse(secondNumber)
            } else {
                throw new Error('values must be a number')
            }
        } else {
            throw new Error('missing required body parameters')
        }
    }
}
import React, { useCallback, useState } from 'react'
import RequestService from '../services/request.service'

const requestService = new RequestService()

const AddNumbersForm = () => {
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [result, setResult] = useState()

    async function handleSubmit() {
        console.log('firstNumber ===', firstNumber)
        console.log('secondNumber ===', secondNumber)
        try {
            let response = await requestService.apiAddNumbers({
                firstNumber: firstNumber,
                secondNumber: secondNumber
            })
            if (response['result']) {
                setResult(response['result'])
            } else {
                setResult(response['message'])
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form>
                <input placeholder='First Number' onChange={(i) => setFirstNumber(i.target.value)}>
                </input>
                <br />
                <br />
                <input placeholder='Second Number' onChange={(i) => setSecondNumber(i.target.value)}>
                </input>
                <br />
                <br />
                <input type="button" value="Submit" onClick={handleSubmit} />
            </form>
            {result}
        </div>
    )
}

export default AddNumbersForm
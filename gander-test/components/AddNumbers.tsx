import React, { useCallback, useState } from 'react'

const AddNumbersForm = () => {
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')

    function handleSubmit() {
        console.log('firstNumber ===', firstNumber)
        console.log('secondNumber ===', secondNumber)
    }
    return (
        <div>
            <form>
                <input placeholder='First Number' onChange={(i) => setFirstNumber(i.target.value)}>
                </input>
                {firstNumber}
                <br />
                <br />
                <input placeholder='Second Number' onChange={(i) => setSecondNumber(i.target.value)}>
                </input>
                <br />
                <br />
                <input type="submit" value="Submit" onSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default AddNumbersForm
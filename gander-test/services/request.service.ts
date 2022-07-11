interface AddNumbersBody {
    firstNumber: string,
    secondNumber: string
}

export default class RequestService {
    async apiAddNumbers(data: AddNumbersBody) {
        try {
            let config = { method: 'POST', body: JSON.stringify(data) }
            let response = await fetch(`/api/add-numbers`, config)
            return response.json()
        } catch (error) {
            console.log(error)
        }
    }
}
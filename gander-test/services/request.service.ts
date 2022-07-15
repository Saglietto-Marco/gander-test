import axios from 'axios'

interface AddNumbersBody {
    firstNumber: string,
    secondNumber: string
}

export default class RequestService {
    async apiAddNumbers(data: AddNumbersBody) {
        try {
            let response = await axios.post(`/api/add-numbers`, data)
            console.log(response)
            return response
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                return error.message
            } else {
                console.log(error)
            }
        }
    }
}
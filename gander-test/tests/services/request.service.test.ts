import RequestService from '../../services/request.service'
import axios from "axios"

process.env.API_URL = 'http://example.com'

const mockRequestService = new RequestService()

let mockResult = {
    result: 100
}

let mockAxiosError = new Error('test')

let mockInputData = {
    firstNumber: "123",
    secondNumber: "123"
}

describe('RequestService test', () => {
    describe('apiAddNumbers()', () => {
        it('A1 Positive Test. Returns response when valid data passed', async () => {
            const axiosPostSpy = jest.spyOn(axios, 'post').mockResolvedValue(mockResult)
            try {
                let result = await mockRequestService.apiAddNumbers(mockInputData)
                axiosPostSpy.mockRestore()
                expect(result).toEqual(mockResult)
            } catch (error) {
                throw error
            }
        })

        it('A2 Negative Test. Throws error when axios level error', async () => {
            const axiosPostSpy = jest.spyOn(axios, 'post').mockRejectedValue(mockAxiosError)
            try {
                let result = await mockRequestService.apiAddNumbers(mockInputData)
                axiosPostSpy.mockRestore()
            } catch (error) {
                expect(error).toEqual(mockAxiosError)
            }
        })
    })
})
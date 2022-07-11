// import { mockRequestService } from '../mocks/mock'
import RequestService from './request.service'
import fetchMock from 'fetch-mock'

process.env.API_URL = 'http://example.com'

fetchMock.mock(process.env.API_URL, 200)

const mockRequestService = new RequestService()

let mockResult = {
    result: 100
}

let mockInputData = {
    firstNumber: "123",
    secondNumber: "123"
}

describe('RequestService test', () => {
    describe('apiAddNumbers()', () => {
        it('A1 Positive Test. Returns response when valid data passed', async () => {
            try {
                let result = await mockRequestService.apiAddNumbers(mockInputData)
                expect(result).toContainEqual(mockResult)
            } catch (error) {
                throw error
            }
        })
    })
})
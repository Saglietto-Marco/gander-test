import type { NextApiRequest, NextApiResponse } from 'next'
import AddNumbersController from './controllers/AddNumbers.controller'

const addNumbersController = new AddNumbersController()

type Data = {
    result?: number
    message?: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Process a POST request
        try {
            let result = addNumbersController.addTwoNumbers(req.body)
            res.status(200).json({ result: result })
        } catch (error) {
            if (error.message === 'values must be a number') {
                res.status(400).json({ message: error.message })
            } else {
                res.status(500).json({ message: 'internal server error' })
            }
        }
    } else {
        // Handle any other HTTP method
        res.status(405).json({ message: 'invalid request method' })
    }
}
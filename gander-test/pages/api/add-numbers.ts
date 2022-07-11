import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    solution?: number
    message?: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Process a POST request

        res.status(200).json({ solution: 12 })
    } else {
        // Handle any other HTTP method
        res.status(405).json({ message: 'invalid request method' })
    }
}
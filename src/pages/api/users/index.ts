import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Francisco' },
        { id: 2, name: 'Joao' },
        { id: 3, name: 'Maria' }
    ]

    return response.json(users);
}
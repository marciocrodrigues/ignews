import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query);

    const id = Number(request.query.id)

    const users = [
        { id: 1, name: 'Francisco' },
        { id: 2, name: 'Joao' },
        { id: 3, name: 'Maria' }
    ]

    const user = users.find(x => x.id === id)

    if (user !== null && user !== undefined) {
        return response.json(user)
    }

    return response.json({ error: 'User not found!' })
}
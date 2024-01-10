// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {method, body} = req

  switch(method){
    case 'GET':
      const initialTemplate = {
        id: 1,
        name: 'myTemplate',
        bag: {
          products: [],
          total: 0
        }
      }
      res.status(200).json(initialTemplate)
      break
    case 'PUT':
      const requestBody = JSON.parse(body)
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(requestBody)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

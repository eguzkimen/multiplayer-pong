import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const r = await fetch('http://pong-online-env.eba-2stuku2x.us-east-1.elasticbeanstalk.com/gameStates')
  .then(res => res.json())

  res.status(200).json(r)
}
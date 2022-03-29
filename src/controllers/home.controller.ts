import { Request, Response } from 'express'

export const homeFunction = (req: Request, res: Response) => {
  try {
    res.send('success')
  } catch (error) {
    res.status(400).send(error)
  }
}

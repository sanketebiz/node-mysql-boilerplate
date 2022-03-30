import Demo, { DemoOutput } from '../models/demo'

export const getAll = async (data?: any): Promise<DemoOutput[]> => {
  return data ? Demo.findAll({ ...data }) : Demo.findAll()
}

import Demo from './demo'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([Demo.sync({ alter: isDev || isTest })])

export default dbInit

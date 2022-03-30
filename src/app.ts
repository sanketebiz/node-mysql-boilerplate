import express, { Application } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import dbInit from './models'
import home from './routes/home.route'
const app: Application = express()
config()
dbInit()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(home)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})

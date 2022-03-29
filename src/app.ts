import express, { Application } from 'express'
import { config } from 'dotenv'
import home from './routes/home.route'
const app: Application = express()
config()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(home)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})

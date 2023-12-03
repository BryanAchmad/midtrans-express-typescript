// console.log('hahahaha')

import express, { type Application } from 'express'
import 'dotenv/config'
import appMiddleware from './middleware'

const app: Application = express()
const port: number =
    process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.use(appMiddleware)

app.listen(port, () => {
    console.log(`Server is running under ${port} port`)
})

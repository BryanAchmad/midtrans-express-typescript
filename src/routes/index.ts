import { Router } from 'express'
import barangRouter from './barang.routes'

const app = Router()

app.use('/api', barangRouter)

export default app

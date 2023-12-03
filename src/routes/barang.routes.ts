import { type Request, type Response, Router } from 'express'
const barangRouter = Router()

barangRouter.get('/barang', (req: Request, res: Response) => {
    res.json({ message: 'Hello Barang' })
})

export default barangRouter

import { type Request, type Response, Router } from 'express'
import { inputBarangValidation } from '../validations/barang.validations'
const barangRouter = Router()

barangRouter.get('/barang', (req: Request, res: Response) => {
    res.json({ message: 'Hello Barang' })
})

barangRouter.post('/barang', (req: Request, res: Response) => {
    const { error, value } = inputBarangValidation(req.body)
    if (error != null) {
        return res.status(400).json({
            error: error.details[0].message,
            message: 'please provide the valid data',
            data: value
        })
    }

    return res.status(200).json({
        error: null,
        message: 'Success Input data',
        data: value
    })
})

export default barangRouter

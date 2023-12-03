import joi from 'joi'
import type BarangType from '../types/barang.type'

export const inputBarangValidation = (
    payload: BarangType
): joi.ValidationResult<BarangType> => {
    const schema = joi.object({
        nama: joi.string().trim().required().message(`{
            'string.base': 'Barang harus berupa string',
            'string.empty': 'Barang tidak boleh kosong',
            'any.required': 'Barang harus diisi'
        }`),
        jumlah: joi.number().required().message(`{
            'string.base': 'Jumlah harus berupa angka',
            'string.empty': 'Jumlah tidak boleh kosong',
            'any.required': 'Jumlah harus diisi'
        }`),
        harga: joi.number().required().message(`{
            'string.base': 'Harga harus berupa string',
            'string.empty': 'Harga tidak boleh kosong',
            'any.required': 'Harga harus diisi'
        }`)
    })

    return schema.validate(payload)
}

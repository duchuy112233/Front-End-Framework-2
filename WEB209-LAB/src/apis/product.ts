import instance from '.'
import { Product } from '../types/Product'

// detail
export const getProduct = async (id: number) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
// hiển thị
export const getProducts = async () => {
  try {
    const { data } = await instance.get(`/products`)
    return data
  } catch (error) {
    console.log(error)
  }
}
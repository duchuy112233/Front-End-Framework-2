import instance from '.'
import { Product } from '~/types/Product' 


// add product
export const createProduct = async (product: Product) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}
//  update
export const updateProduct = async (product: Product) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
//delete
export const removeProduct = async (id: string) => {
  try {
    await instance.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};
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
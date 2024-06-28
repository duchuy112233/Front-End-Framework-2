import { Link } from 'react-router-dom'
//
import { SubmitHandler, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
//
import schemaProduct from '~/validation/product'
import { getProduct } from '~/apis/product'
import { Product } from '~/types/Product'
type Props = {
  onEdit: (product: Product) => void
}

const ProductEdit = ({ onEdit }: Props) => {
  const [product, setProduct] = useState<Product | null>(null)
  const { id } = useParams()
  useEffect(() => {
    ;(async () => {
      const data = await getProduct(Number(id))
      setProduct(data)
    })()
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct)
  })

  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    onEdit({ ...data, id })
  }

  return (
    <div>
      <h1 className='text-2xl text-center font-bold mb-4'>Cập nhật sản phẩm</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {/* Tên sp */}
        <div className='mb-4'>
          <label htmlFor='title' className='block'>
            Tên sản phẩm
          </label>
          <input
            type='text'
            className='border border-gray-300 p-2 w-full rounded-md'
            id='title'
            defaultValue={product?.title}
            placeholder='Tên sản phẩm...'
            {...register('title', { required: true, minLength: 3, maxLength: 100 })}
          />
          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>
        {/* Giá */}
        <div className='mb-4'>
          <label htmlFor='price' className='block'>
            Giá sản phẩm
          </label>
          <input
            type='text'
            className='border border-gray-300 p-2 w-full rounded-md'
            id='price'
            defaultValue={product?.price as number}
            placeholder='Giá sản phẩm...'
            {...register('price', { required: true, minLength: 3 })}
          />
          {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
        </div>
        {/* Mô tả */}
        <div className='mb-4'>
          <label htmlFor='description' className='block'>
            Mô tả
          </label>
          <input
            type='text'
            className='border border-gray-300 p-2 w-full rounded-md'
            id='description'
            defaultValue={product?.description}
            placeholder='Mô tả sản phẩm ...'
            {...register('description', { required: true, minLength: 5 })}
          />
        </div>
        {/* ảnh */}
        <div className='mb-4'>
          <label htmlFor='thumbnail' className='block'>
            Hình ảnh
          </label>
          <img className='max-w-full p-2 h-auto' width={200} src={product?.thumbnail} />
          <input
            type='text'
            className='border border-gray-300 p-2 w-full rounded-md'
            id='thumbnail'
            defaultValue={product?.thumbnail}
            placeholder='Ảnh sản phẩm...'
            {...register('thumbnail', { required: true, minLength: 5 })}
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md w-full'>
          Xác nhận
        </button>
        <Link className='mt-2 bg-red-500 text-white py-2 px-4 rounded-md w-full block text-center' to='/admin'>
          Huỷ
        </Link>
      </form>
    </div>
  )
}

export default ProductEdit

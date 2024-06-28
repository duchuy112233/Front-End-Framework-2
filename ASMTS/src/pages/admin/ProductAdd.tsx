import { SubmitHandler, useForm } from 'react-hook-form'
import { Product } from '~/types/Product'
import schemaProduct from '~/validation/product'
import { joiResolver } from '@hookform/resolvers/joi'

type Props = {
  onAdd: (product: Product) => void
}

const ProductAdd = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct)
  })

  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    props.onAdd(data)
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <h1 className='text-2xl text-center font-semibold mb-4'>Thêm mới sản phẩm</h1>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='block mb-1'>Tên sản phẩm</label>
          <input
            type='text'
            id='title'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Tên sản phẩm...'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>
        <div>
          <label className='block mb-1'>Giá sản phẩm</label>
          <input
            type='text'
            id='price'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Giá sản phẩm...'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
        </div>
        <div>
          <label className='block mb-1'>Mô tả sản phẩm</label>
          <input
            type='text'
            id='description'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Mô tả sản phẩm...'
            {...register('description')}
          />
        </div>
        <div>
          <label className='block mb-1'>Ảnh sản phẩm</label>
          <input
            type='text'
            id='thumbnail'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Ảnh sản phẩm...'
            {...register('thumbnail')}
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300'
        >
          Xác nhận
        </button>
      </form>
    </div>
  )
}

export default ProductAdd

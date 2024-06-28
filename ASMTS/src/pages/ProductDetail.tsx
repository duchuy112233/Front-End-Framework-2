import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '~/apis/product'
import { Product } from '~/types/Product'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    ;(async () => {
      const data = await getProduct(+id!)
      
      setProduct(data)
    })()
  }, [])

  return (
    <div className='flex gap-10 '>
      {product ? (
        <>
          <div>
            <img src={product.thumbnail} alt={product.title} className=' w-[600px] h-[350px] rounded-md mb-4' />
            <div className='w-[550px]'>
              <p className='text-gray-700 mb-4'>
                <p className='text-[20px] font-bold'>Mô tả</p>
                {product.description}
              </p>
            </div>
          </div>

          <div>
            <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-2 flex font-bold gap-1'>
              Price: <p className='text-red-500 '>{product.price}</p>VNĐ{' '}
            </p>
            <p className='text-gray-700 mb-4'>Brand: {product.brand}</p>
            <p className='text-gray-700 mb-4'>Rating: {product.rating}</p>

            <button className='bg-red-500 hover:bg-red-700 text-white font-bold mt-[160px] py-2 px-4 rounded'>
              Mua hàng
            </button>
          </div>
        </>
      ) : (
        <div className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Không còn sản phẩm này</h2>
          <a href='/' className='text-blue-500 hover:underline'>
            Go back Home
          </a>
        </div>
      )}
    </div>
  )
}

export default ProductDetail

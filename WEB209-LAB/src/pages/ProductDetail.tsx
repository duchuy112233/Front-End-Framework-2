import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../apis/product'
import { Product } from '../types/Product'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    ////Thời gian loading... trang
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    ////Detail
    ;(async () => {
      const data = await getProduct(+id!)
      setProduct(data)
    })()
  }, [id])

  ////////Price
  const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  ///////Tăng giảm số lượng
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  ////////Loading trang
  if (loading) {
    return (
      <div className='flex items-center justify-center mt-10'>
        <div className='text-center'>
          <svg
            className='animate-spin h-8 w-8 text-gray-600 mx-auto mb-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          <div className='text-2xl font-semibold text-gray-700'>Loading...</div>
        </div>
      </div>
    )
  }
  ///////Thông báo khi add to card
  const showAlertMessage = (message: string) => {
    setShowAlert(true)
    setAlertMessage(message)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000) // ẩn thông báo sau 3 giây
  }
  const addToCart = () => {
    // Thêm logic xử lý thêm sản phẩm vào giỏ hàng ở đây

    // Hiển thị thông báo khi đã thêm sản phẩm vào giỏ hàng
    showAlertMessage('Đã thêm sản phẩm vào giỏ hàng')
  }
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
            <p className='text-gray-600 mb-2'>
              <span className='font-bold'>Price:</span>{' '}
              <span className='text-red-500'>{formatCurrency(product.price)}</span> VNĐ
            </p>
            <p className='text-gray-700 mb-2'>
              <span className='font-bold'>Đánh giá: </span> {product.rating} Sao
            </p>
            <p className='text-gray-700 mb-4'>
              <span className='font-bold'>Danh mục:</span> {product.category}
            </p>
            {/* //////////////Số lượng */}

            <div className='flex items-center mb-4'>
              <button
                onClick={handleDecrease}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
              >
                -
              </button>
              <span className='bg-white text-gray-800 font-bold py-2 px-4 border-t border-b'>{quantity}</span>
              <button
                onClick={handleIncrease}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
              >
                +
              </button>
            </div>
            {/* ///////Thông báo add to card/ */}
            <div className='flex justify-end'>
              {showAlert && (
                <div className='bg-green-200 border-green-600 border-l-4 text-green-900 p-4 absolute top-28 right-0 mt-4 mr-4'>
                  {alertMessage}
                </div>
              )}
            </div>
            {/* ///////////////////// */}
            <button
              onClick={addToCart}
              className='bg-red-500 hover:bg-red-700 text-white font-bold mt-[160px] py-2 px-4 rounded'
            >
              ADD TO CART
            </button>
          </div>
        </>
      ) : (
        <div className='mt-8'>
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

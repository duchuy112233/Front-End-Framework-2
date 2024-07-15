import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import Banner from '../components/Banner'
import { Product } from '../types/Product'

type Props = {
  products: Product[]
}

const formatCurrency = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const Home = ({ products }: Props) => {
  const [pageNumber, setPageNumber] = useState(0)
  const productsPerPage = 8 // Hiển thị 8 sản phẩm trên mỗi trang (4 trên, 4 dưới)
  const pagesVisited = pageNumber * productsPerPage

  const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => (
    <div key={product.id} className='group'>
      <div className='shadow-md rounded-lg overflow-hidden    item-product px-5 pt-[13px] pb-[26px] h-[360px] flex flex-col justify-between mt-10 transition-transform duration-300 transform group-hover:scale-105'>
        <Link to={`/detail/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} className='w-[230px] h-[180px]' />
        </Link>

        <div className='info-product'>
          <Link to={`/detail/${product.id}`}>
            <h3 className='color-text text-[20px]'>{product.title}</h3>
          </Link>
          <div className='reviews flex items-center my-[6px]'>
            <div className='starts text-xs'>
              <i className='fa-solid text-yellow-500 fa-star'></i>
              <i className='fa-solid text-yellow-500 fa-star'></i>
              <i className='fa-solid text-yellow-500 fa-star'></i>
              <i className='fa-solid text-yellow-500 fa-star'></i>
              <i className='fa-solid text-yellow-500 fa-star'></i>
            </div>
            <span className='w-[1px] h-[10px] bg-slate-300 m-[6px]'></span>
            <div className='sold text-xs text-[#787878]'>Đã bán 1000+</div>
          </div>
          <div className='price color-price flex items-center text-red-500 text-[20px]'>
            <span>{formatCurrency(product.price)}</span> ₫
            <div className='ml-2 text-xs border border-red-500 bg-[#FFF0F1]'>-23%</div>
          </div>

          <div className='mt-4'>
            <a href='#' className='hover:text-red-300 text-gray-700 font-bold rounded'>
              Thêm vào giỏ hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  ))

  const pageCount = Math.ceil(products.length / productsPerPage)

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <Banner />
      <div className='container mx-auto px-4'>
        <h1 className=' font-bold mt-10 mb-8'>SẢN PHẨM BÁN CHẠY</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>{displayProducts}</div>
        <ReactPaginate
          previousLabel='Previous'
          nextLabel='Next'
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName='flex justify-center mt-8'
          activeClassName='font-bold'
          previousClassName='p-2 border rounded mr-2'
          nextClassName='p-2 border rounded ml-2'
          pageClassName='p-2 border rounded mx-1 text-red-500' // Đổi màu chữ của các số trang thành màu đỏ
        />
      </div>
    </>
  )
}

export default Home

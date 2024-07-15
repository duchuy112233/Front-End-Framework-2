import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { Product } from '~/types/Product'

type Props = {
  products: Product[]
  onDel: (id: number | undefined) => void
}

const Dashboard = ({ products, onDel }: Props) => {
  const handleDelete = (id: number | undefined) => {
    onDel(id)
  }
  const [pageNumber, setPageNumber] = useState(0)
  const productsPerPage = 6 // Hiển thị 6 sản phẩm trên mỗi trang
  const pagesVisited = pageNumber * productsPerPage

  const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage).map((item) => (
    <tr key={item.id}>
      <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center'>{item.id}</td>
      <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>{item.title}</td>
      <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>{item.price}</td>
      <td className='whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center items-center'>
        <img className='max-w-full h-auto' width={140} src={item.thumbnail} alt={item.title} />
      </td>
      <td className=' px-4 py-2 text-gray-900'>{item.description}</td>
      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
        <Link
          className='btn btn-danger bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2'
          to={`/detail/${item.id}`}
        >
          View
        </Link>
        <button
          onClick={() => handleDelete(Number(item.id))}
          className='btn btn-danger bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2'
        >
          Delete
        </button>
        <Link
          to={`/admin/edit/${item.id}`}
          className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'
        >
          Edit
        </Link>
      </td>
    </tr>
  ))

  const pageCount = Math.ceil(products.length / productsPerPage)

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <h1 className='text-4xl text-center'>Admin</h1>

      <Link className='mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to='/admin/add'>
        Thêm mới sản phẩm
      </Link>

      <div className='overflow-x-auto mt-10'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <thead className='ltr:text-left rtl:text-right'>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Id</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Title</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Price</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Thumbnail</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Description</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Action</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>{displayProducts}</tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel='Previous'
        nextLabel='Next'
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName='flex justify-center mt-8'
        activeClassName='font-bold'
        previousClassName='p-2 border rounded mr-2'
        nextClassName='p-2 border rounded ml-2'
        pageClassName='p-2 border rounded mx-1 text-blue-500 hover:text-white hover:bg-blue-500' // Tùy chỉnh màu sắc cho các số trang
      />
    </>
  )
}

export default Dashboard

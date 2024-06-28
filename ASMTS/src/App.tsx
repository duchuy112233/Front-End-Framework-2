import Footer from './components/Footer'
import Header from './components/Header'
import { Product } from './types/Product'
//
import { createProduct, getProducts, updateProduct, removeProduct } from './apis/product'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
//home, detail
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
//
// import Shop from './pages/Shop'
import About from './pages/About'
import NotFound from './pages/NotFound'
//admin
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
//
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  // Hiển thị
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  // add
  const navigate = useNavigate()
  const handleAddProduct = (product: Product) => {
    ;(async () => {
      const data = await createProduct(product)
      setProducts([...products, data])
    })()
    navigate('/admin')
  }
  // edit
  const handleEditProduct = (product: Product) => {
    ;(async () => {
      const data = await updateProduct(product)
      setProducts(products.map((p) => (p.id === data.id ? data : p)))
    })()
    navigate('/admin')
  }
  // delete
  const handleDeleteProduct = (id: number | undefined) => {
    ;(async () => {
      const isConfirm = window.confirm('Bạn có chắc chắn muốn xoá sản phẩm này?')
      if (isConfirm) {
        await removeProduct(`${id}`)
        setProducts(products.filter((i) => i.id !== id))
      }
    })()
  }
  //
  return (
    <>
      <Header />
      <main className='mt-20 bg-white color-text '>
        <div className='max-w-screen-xl mx-auto pt-[14px] flex pb-16'>
          <div className='content grow'>
            <Routes>
              {/* // */}
              <Route path='/'>
                <Route index element={<Home products={products} />} />
                {/* <Route path='/shop' element={<Shop />} /> */}
                <Route path='/about' element={<About />} />
                <Route path='/shop/:id' element={<ProductDetail />} />
              </Route>
              {/* admin */}
              <Route path='/admin'>
                <Route path='/admin' element={<Dashboard products={products} onDel={handleDeleteProduct} />} />
                <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct} />} />
                <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEditProduct} />} />
              </Route>
              {/* Login-Register */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* /404/ */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

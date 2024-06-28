import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'
import { useEffect, useState } from 'react'
import instance from './apis'
import Dashboard from './pages/admin/Dashboard'
import { Product } from './interfaces/Product'

function App() {
	const [products, setProducts] = useState<Product[]>([])
	useEffect(() => {
		const fetchAPI = async () => {
			const { data } = await instance.get('/products')
			setProducts(data)
		}

		fetchAPI()
	}, [])

	const handleRemove = async (id: number) => {
		if (confirm('Ban chac chua?')) {
			await instance.delete(`/products/${id}`)
			setProducts(products.filter((item) => item.id !== id))
		}
	}
	return (
		<>
			<Header />
			<main id='main' className='container'>
				<Routes>
					{/* Client */}
					<Route index element={<Home products={products} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />

					{/* Admin */}
					<Route path='/admin' element={<Dashboard products={products} handleRemove={handleRemove} />} />
					<Route path='*' element={<Notfound />} />
				</Routes>
			</main>

			<Footer />
		</>
	)
}

export default App

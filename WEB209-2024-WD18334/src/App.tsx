import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Notfound from "./pages/Notfound";
import { Product } from "./interfaces/Product";
import { useEffect, useState } from "react";
import { instance } from "./api";

function App() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		})();
	}, []);

	const handleRemove = async (id: any) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			setProducts(products.filter((item) => item.id !== id));
		}
	};
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/admin" element={<Dashboard products={products} onRemove={handleRemove} />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;

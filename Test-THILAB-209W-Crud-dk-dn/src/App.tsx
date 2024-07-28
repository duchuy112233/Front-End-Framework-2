import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import useProducts from "./hooks/useProduct";
function App() {
  const { products, handleAddProduct, handleEditProduct, handleDeleteProduct } =
    useProducts();
  return (
    <>
      <main className="mt-20 bg-white color-text">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              {/* Admin Routes */}
              <Route path="/" element={<LayoutAdmin />}>
                <Route
                  index
                  element={
                    <List products={products} onDel={handleDeleteProduct} />
                  }
                />
                <Route
                  path="admin/add"
                  element={<Add onAdd={handleAddProduct} />}
                />
                <Route
                  path="admin/edit/:id"
                  element={<Edit onEdit={handleEditProduct} />}
                />
              </Route>
              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

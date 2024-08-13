import { Link, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LayoutAdmin from "./components/Layout/LayoutAdmin";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
function App() {
  const routes = useRoutes([
    {
      path: "admin",
      element: <LayoutAdmin />,
      children: [
        {
          path: "product/list",
          element: <List />,
        },
        {
          path: "product/add",
          element: <Add />,
        },
        {
          path: "product/edit/:id",
          element: <Edit />,
        },
      ],
    },

    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Thi WEB209
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: 3, fontSize: 20 }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="admin/product/add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="admin/product/list">
                  List Product
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger">Logout</button>
        </div>
      </nav>
      <ToastContainer />
      <div className="container">{routes}</div>
    </>
  );
}

export default App;

import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import LayoutClient from "./layouts/LayoutClient";
import Login from "./pages/Login";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Admin from "./pages/admin";
import UserStep1 from "./pages/user/step1";
import UserStep2 from "./pages/user/step2";
import UserInfo from "./pages/user/info";
import AdminProductList from "./pages/admin/product/list";
import Loading from "./components/Loading";
import { useLoading } from "./context/loading";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";

const routeConfig = [
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "product/list",
        element: <AdminProductList />,
      },
      {
        path: "product/add",
        element: <AdminProductAdd />,
      },
      {
        path: "product/edit/:id",
        element: <AdminProductEdit />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "product/:id", element: <ProductDetail /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user/step1",
        element: <UserStep1 />,
      },
      {
        path: "/user/step2",
        element: <UserStep2 />,
      },
      {
        path: "/user/info",
        element: <UserInfo />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);
  const { loading } = useLoading();

  return (
    <main>
      <Loading isShow={loading} />
      {routes}
    </main>
  );
}

export default App;

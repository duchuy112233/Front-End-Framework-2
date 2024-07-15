import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/register";

const routeConfig = [
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "product/:id", element: <ProductDetail /> },
  {
    path: "/register",
    element: <Register />,
  },
 
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
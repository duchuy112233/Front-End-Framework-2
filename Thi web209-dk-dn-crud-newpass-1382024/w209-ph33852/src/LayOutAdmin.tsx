import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="container">
      {token ? <Outlet></Outlet> : <Navigate to={"/login"} />}
    </div>
  );
};

export default Layout;

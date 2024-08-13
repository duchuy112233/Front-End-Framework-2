import { Navigate, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="container">
      {token ? <Outlet></Outlet> : <Navigate to={"/login"} />}
    </div>
  );
};

export default LayoutAdmin;

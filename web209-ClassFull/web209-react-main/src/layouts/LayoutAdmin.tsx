import { Navigate, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  const token = localStorage.getItem("token");
  // if (!token) {
  //   return <Navigate to={"/login"} replace />;
  // }
  // if (user?.role !== "admin") {
  //   return <h1>403 Forbiden</h1>;
  // }

  return (
    <>
      <p>Sidebar</p>
      <Outlet />
    </>
  );
};

export default LayoutAdmin;

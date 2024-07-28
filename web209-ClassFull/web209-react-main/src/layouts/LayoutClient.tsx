// import { Box, CircularProgress } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
// import { useUser } from "src/context/user";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
// import { useLoading } from "src/context/loading";
import Loading from "src/components/Loading";

const LayoutClient = () => {
  // const { loading } = useLoading();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  return (
    <>
      <Loading isShow={isLoading} />
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default LayoutClient;

import axios, { AxiosError } from "axios";
import { UserInputs } from "../types/User";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAuth = () => {
  const nav = useNavigate();
  //
  const HandleRegister = async (values: UserInputs) => {
    try {
      await axios.post("/register", values);
      toast.success("Đăng ký thành công");
      nav("/login");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  //
  const HandleLogin = async (values: UserInputs) => {
    try {
      const { data } = await axios.post("/login", values);
      localStorage.setItem("token", data.accessToken);
      toast.success("Đăng nhập thành công");
      nav("/admin/product/list");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  //
  return { HandleRegister, HandleLogin };
};

export default useAuth;

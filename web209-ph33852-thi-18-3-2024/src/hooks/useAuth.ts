import { useNavigate } from "react-router-dom";
import { UserInputs } from "../types/User";
import { toast } from "react-toastify";
import axios from "axios";

const useAuth = () => {
  const nav = useNavigate();
  //
  const handleRegister = async (values: UserInputs) => {
    try {
      await axios.post("/register", values);
      toast.success("dang ky thanh cong");
      nav("/login");
    } catch (error) {
      toast.error("dang ky that bai");
    }
  };
  //
  const handleLogin = async (values: UserInputs) => {
    try {
      const { data } = await axios.post("/login", values);
      localStorage.setItem("token", data.accessToken);
      toast.success("dang nhap thanh cong");
      nav("/admin/product/list");
    } catch (error) {
      toast.error("dang nhap that bai");
    }
  };

  return { handleRegister, handleLogin };
};

export default useAuth;

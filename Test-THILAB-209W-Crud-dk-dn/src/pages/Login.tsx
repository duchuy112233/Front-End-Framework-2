import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//////////////////////////////////////
import { User } from "../types/User";
import instance from "../apis";
//////////////////////////////////////

const Login = () => {
  const navigate = useNavigate();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  //
  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      const { data } = await instance.post(`/login`, user);
      localStorage.setItem("token", data.accessToken);
      if (data.user) {
        toast.success("Đăng Nhập thành công");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error("Đăng ký thất bại");
    }
  };
  //
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md relative">
      <h1 className="text-2xl text-center font-semibold mb-4">Đăng Nhập</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Email..."
            {...register("email", {
              required: "Email là bắt buộc",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không hợp lệ",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Password..."
            {...register("password", {
              required: "Mật khẩu là bắt buộc",
              minLength: {
                value: 3,
                message: "Mật khẩu phải có ít nhất 3 ký tự",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Xác nhận
        </button>
      </form>
    </div>
  );
};

export default Login;

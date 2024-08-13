import { useForm } from "react-hook-form";
import { UserInputs } from "../types/User";
//
type AuthFormProps = {
  onSubmit: (data: UserInputs) => void;
};
//
const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();
  //
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-3 mb-3">
          <label htmlFor="email">Địa chỉ email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Nhập email"
            {...register("email", {
              required: "ko de trong",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Địa chỉ email không hợp lệ",
              },
              minLength: {
                value: 5,
                message: "Tren 5 ky tu",
              },
            })}
          />
          {errors.email && (
            <small className="form-text text-danger">
              {errors.email.message}{" "}
            </small>
          )}
        </div>
        {/* /// */}
        <div className="form-group mb-3">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            {...register("password", {
              required: "ko de trong",
              min: {
                value: 0,
                message: "ko aam",
              },
              minLength: {
                value: 5,
                message: "toi da 5 ky tu",
              },
            })}
          />
          {errors.password && (
            <small className="form-text text-danger">
              {errors.password.message}{" "}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Gửi
        </button>
      </form>
    </div>
  );
};

export default AuthForm;

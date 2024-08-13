import { useForm } from "react-hook-form";
import { UserInputs } from "../types/User";
type AuthFormProps = {
  onSubmit: (data: UserInputs) => void;
};
const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mt-3 mb-3">
        <label htmlFor="email">Địa chỉ email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Nhập email"
          {...register("email", {
            required: "Email là bắt buộc",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Địa chỉ email không hợp lệ",
            },
          })}
        />
        {errors.email && (
          <small className="form-text text-danger">
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Nhập mật khẩu"
          {...register("password", {
            required: "Mật khẩu là bắt buộc",
            minLength: {
              value: 6,
              message: "Mật khẩu phải có ít nhất 6 ký tự",
            },
            maxLength: {
              value: 20,
              message: "Mật khẩu không được vượt quá 20 ký tự",
            },
          })}
        />
        {errors.password && (
          <small className="form-text text-danger">
            {errors.password.message}
          </small>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Gửi
      </button>
    </form>
  );
};

export default AuthForm;

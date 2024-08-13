import { Button, Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputText } from "src/components/elements/InputText";
import { MIN_PASSWORD } from "src/consts";
import { useProductCart } from "src/hooks/useProductCart";

type LoginFormParams = {
  email: string;
  password: string;
};

const Login = () => {
  const nav = useNavigate();
  const { getCartUser } = useProductCart();

  const validate = (values: LoginFormParams) => {
    const { email, password } = values;
    const errors: ValidationErrors = {};

    // Kiểm tra email
    if (!email) {
      errors.email = "Vui lòng nhập địa chỉ email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Địa chỉ email không hợp lệ";
    }

    // Kiểm tra mật khẩu
    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    } else if (password.length < MIN_PASSWORD) {
      errors.password = `Mật khẩu phải có ít nhất ${MIN_PASSWORD} ký tự`;
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Mật khẩu phải có ít nhất một chữ cái viết hoa";
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Mật khẩu phải có ít nhất một số";
    }

    return errors;
  };

  const onSubmit = async (values: LoginFormParams) => {
    try {
      const { data } = await axios.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      getCartUser();
      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        nav("/");
      }, 2000);
    } catch (error) {
      toast.error("Đăng nhập không thành công. Vui lòng kiểm tra lại email và mật khẩu");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" textAlign="center" mb={2}>
        Đăng Nhập
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <Stack spacing={2} component="form" onSubmit={handleSubmit}>
            <Field
              name="email"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label="Email"
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field
              name="password"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label="Mật khẩu"
                  messageError={meta.touched && meta.error}
                  type="password"
                />
              )}
            />
            <Button variant="contained" type="submit">
              Đăng Nhập
            </Button>
            <Typography variant="body2" textAlign="center">
              Chưa có tài khoản?{' '}
              <MuiLink href="/register" variant="body2">
                Đăng ký
              </MuiLink>
            </Typography>
          </Stack>
        )}
      />
    </Container>
  );
};

export default Login;

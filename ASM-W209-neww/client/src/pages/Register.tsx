import {
  Button,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputText } from "src/components/elements/InputText";
import { MIN_PASSWORD } from "src/consts";

type RegisterFormParams = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const nav = useNavigate();

  const validate = (values: RegisterFormParams) => {
    const { username, email, password } = values;
    const errors: ValidationErrors = {};

    // Kiểm tra tên người dùng
    if (!username) {
      errors.username = "Vui lòng nhập tên người dùng";
    }

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

  const onSubmit = async (data: RegisterFormParams) => {
    try {
      await axios.post("/auth/register", data);
      toast.success("Đăng ký thành công");
      setTimeout(() => {
        nav("/login");
      }, 2000);
    } catch (error) {
      toast.error("Đăng ký không thành công. Vui lòng kiểm tra lại thông tin");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" textAlign="center" mb={2}>
        Đăng Ký
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack spacing={2} component="form" onSubmit={handleSubmit}>
            <Field
              name="username"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label="Tên Người Dùng"
                  messageError={meta.touched && meta.error}
                />
              )}
            />
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
                  label="Mật Khẩu"
                  messageError={meta.touched && meta.error}
                  type="password"
                />
              )}
            />
            <Button variant="contained" type="submit">
              Đăng Ký
            </Button>
            <Typography variant="body2" textAlign="center">
              Đã có tài khoản?{' '}
              <MuiLink href="/login" variant="body2">
                Đăng Nhập
              </MuiLink>
            </Typography>
          </Stack>
        )}
      />
    </Container>
  );
};

export default Register;

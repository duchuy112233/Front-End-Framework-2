import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "src/context/user";

type LoginFormParams = {
  email: string;
  password: string;
};

const Login = () => {
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormParams>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormParams> = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      localStorage.setItem("token", res.data.accessToken);
      setUser(res.data.user);
      // navigate("/admin");
    } catch (error) {}
  };

  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField
            label="Email"
            {...register("email")}
            error={!!errors?.email?.message}
            helperText={errors?.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors?.password?.message}
            helperText={errors?.password?.message}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;

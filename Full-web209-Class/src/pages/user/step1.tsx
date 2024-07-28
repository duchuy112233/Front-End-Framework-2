import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "src/context/user";

type FormParams = {
  username: string;
};

const UserStep1 = () => {
  const { user, setUser } = useUser();
  const { register, handleSubmit, setValue } = useForm<FormParams>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormParams> = async (data) => {
    try {
      setUser({ ...user, ...data });
      navigate("/user/step2");
    } catch (error) {}
  };

  useEffect(() => {
    if (!user?.username) return;
    setValue("username", user?.username);
  }, [user]);

  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        User Step 1
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField label="Username" {...register("username")} />
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default UserStep1;

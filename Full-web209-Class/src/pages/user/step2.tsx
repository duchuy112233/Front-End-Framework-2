import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "src/context/user";

type FormParams = {
  phone: string;
};

const UserStep2 = () => {
  const { user, setUser } = useUser();
  const { register, handleSubmit, setValue } = useForm<FormParams>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormParams> = async (data) => {
    try {
      setUser({ ...user, ...data });
      navigate("/user/info");
    } catch (error) {}
  };

  useEffect(() => {
    if (!user?.phone) return;
    setValue("phone", user?.phone);
  }, [user]);
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        User Step 2
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField label="Phone" {...register("phone")} />
          <Stack direction={"row"} gap={2}>
            <Link to={"/user/step1"}>
              <Button type="submit" variant="contained">
                Back
              </Button>
            </Link>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};

export default UserStep2;

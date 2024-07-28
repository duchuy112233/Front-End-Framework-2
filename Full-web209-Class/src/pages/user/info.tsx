import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "src/context/user";

function UserInfo() {
  const { user } = useUser();

  return (
    <>
      <h1>User Info</h1>
      {user && (
        <Stack gap={2}>
          <Typography>Username: {user.username}</Typography>
          <Typography>Phone: {user.phone}</Typography>
          <Link to={"/user/step2"}>
            <Button variant="contained">Back</Button>
          </Link>
        </Stack>
      )}
    </>
  );
}

export default UserInfo;

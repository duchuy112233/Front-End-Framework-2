import useAuth from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const { HandleLogin } = useAuth();
  return (
    <div className="container">
      <h1>Login</h1>
      <AuthForm onSubmit={HandleLogin} />
    </div>
  );
};

export default Login;

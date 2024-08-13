import useAuth from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const { handleLogin } = useAuth();
  return (
    <div className="container">
        <h1>Loginnn</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;

import useAuth from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const { HandleRegister } = useAuth();
  return (
    <div className="container">
      <h1>Register</h1>
      <AuthForm onSubmit={HandleRegister} />
    </div>
  );
};

export default Register;

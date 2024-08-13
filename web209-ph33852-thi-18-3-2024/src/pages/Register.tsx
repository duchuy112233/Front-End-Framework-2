import useAuth from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const { handleRegister } = useAuth();
  return (
    <div className="container">
        <h1>Registerrr</h1>
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;

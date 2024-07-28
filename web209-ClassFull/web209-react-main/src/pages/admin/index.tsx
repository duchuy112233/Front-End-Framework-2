import { useLoading } from "src/context/loading";

function Admin() {
  const { loading } = useLoading();
  console.log(loading);

  return <h1>Loading: {loading ? "True" : "False"}</h1>;
}

export default Admin;

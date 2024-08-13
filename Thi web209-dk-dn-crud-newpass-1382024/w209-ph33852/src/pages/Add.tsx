import useProduct from "../hooks/useProduct";
import ProductForm from "./../components/ProductForm";

const Add = () => {
  const { HandleAdd } = useProduct();
  return (
    <div className="container">
      <h1>Add</h1>
      <ProductForm onSubmit={HandleAdd} />
    </div>
  );
};

export default Add;

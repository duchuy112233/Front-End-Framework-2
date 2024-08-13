
import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";

const Add = () => {
  const { handleAdd } = useProduct();
  return (
    <div className="container">
        <h1>Addnn</h1>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
};

export default Add;

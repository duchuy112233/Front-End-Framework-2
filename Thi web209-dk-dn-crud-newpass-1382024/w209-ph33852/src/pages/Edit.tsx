import useProduct from "../hooks/useProduct";
import ProductForm from "./../components/ProductForm";

const Edit = () => {
  const { getEdit, product } = useProduct();

  return (
    <div className="container">
      <h1>Edit</h1>
      <ProductForm onSubmit={getEdit} product={product} />
    </div>
  );
};

export default Edit;

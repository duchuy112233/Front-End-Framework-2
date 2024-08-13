import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";

const Edit = () => {
  const { handleEdit, product } = useProduct();
  return (
    <div className="container">
      <h1>Edittt</h1>
      <ProductForm onSubmit={handleEdit} product={product} />
    </div>
  );
};

export default Edit;

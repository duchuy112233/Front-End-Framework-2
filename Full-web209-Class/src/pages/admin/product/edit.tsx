import { Container, Typography } from "@mui/material";
import ProductForm from "src/components/ProductForm";
import { useProduct } from "src/hooks/useProduct";

function AdminProductEdit() {
  const { handleEditProduct, product } = useProduct();

  return (
    <Container>
      <Typography variant="h3">Edit Product</Typography>
      <ProductForm onSubmit={handleEditProduct} product={product} />
    </Container>
  );
}

export default AdminProductEdit;

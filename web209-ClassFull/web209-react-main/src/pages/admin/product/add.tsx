import { Container, Typography } from "@mui/material";
import ProductForm from "src/components/ProductForm";
import { useProduct } from "src/hooks/useProduct";

function AdminProductAdd() {
  const { handleAddProduct } = useProduct();

  return (
    <Container>
      <Typography variant="h3">Add Product </Typography>
      <ProductForm onSubmit={handleAddProduct} />
    </Container>
  );
}

export default AdminProductAdd;

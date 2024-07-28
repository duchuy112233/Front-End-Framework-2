import {
  Alert,
  Container,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "src/hooks/useProduct";
import { Link } from "react-router-dom";

function AdminProductList() {
  const { error, products, totalProduct, handleDeleteProduct } = useProduct();

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <Typography variant="h3">
        Admin Product List - {totalProduct} Products
      </Typography>
      ;
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Desc</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="right">
                  <img src={product.image} width={"100px"} />
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">Desc</TableCell>
                <TableCell align="right">
                  <Stack gap={3} direction={"row"}>
                    <Link to={`/admin/product/edit/${product.id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton onClick={() => handleDeleteProduct(product.id)}>
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default AdminProductList;

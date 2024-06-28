import { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/material";
import { Product } from "./types/Product";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setProducts(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={3} // 24px
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
    </>
  );
}

export default App;
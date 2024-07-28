import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "src/types/Product";
import { Button, Container, Stack, Typography } from "@mui/material";
import Loading from "src/components/Loading";
import { useLoading } from "src/context/loading";
import { useProduct } from "src/hooks/useProduct";

function ProductDetail() {
  const { product } = useProduct();
  const { loading } = useLoading();

  return (
    <>
      <Container>
        <Loading isShow={loading} />
        {product && (
          <Stack direction={"row"} gap={3}>
            <img src={product.image} alt="" width={"500px"} />
            <Stack gap={3}>
              <Typography component="h1" fontSize={"26px"}>
                {product.title}
              </Typography>
              <Typography fontWeight={"bold"} color={"Highlight"}>
                ${product.price}
              </Typography>
              <Typography>{product.description}</Typography>
              <Button variant="outlined">Add to cart</Button>
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
}

export default ProductDetail;

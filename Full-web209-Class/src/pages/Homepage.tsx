import { Stack } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductCard from "src/components/ProductCard";
import { useLoading } from "src/context/loading";
import { useProduct } from "src/hooks/useProduct";
// import { useProduct } from "src/hooks/useProduct";
import { AppDispatch } from "src/redux/store";
import { Product } from "src/types/Product";

function Homepage() {
  // const {isLoading, setLoading } = useLoading();
  const dispatch: AppDispatch = useDispatch();

  const { products } = useProduct();
  return (
    <>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
    </>
  );
}

export default Homepage;

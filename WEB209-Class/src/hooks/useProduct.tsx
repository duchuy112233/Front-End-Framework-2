import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLoading } from "src/context/loading";
import { Product } from "src/types/Product";

type Error = {
  message: string;
};

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const { setLoading } = useLoading();

  const getAllProduct = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      setError((error as Error)?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const totalProduct = useMemo(() => products.length, [products]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleDeleteProduct = useCallback(async (id: string) => {
    if (window.confirm("Xoa that ko?")) {
      try {
        setLoading(true);
        await axios.delete(`/products/${id}`);
        getAllProduct();
      } catch (error) {
        setError((error as Error)?.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);



  const addProduct =  {
   
  }













  

  return {
    error,
    products,
    totalProduct,
    getAllProduct,
    handleDeleteProduct,
    addProduct
  };
};
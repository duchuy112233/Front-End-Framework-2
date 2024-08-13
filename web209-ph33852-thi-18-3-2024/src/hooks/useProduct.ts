import { useNavigate, useParams } from "react-router-dom";
import { Product, ProductInputs } from "../types/Product";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
//
const useProduct = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
  //
  const handleAdd = async (values: ProductInputs) => {
    try {
      await axios.post("/products", values);
      toast.success("Them thanh cong");
      nav("/admin/product/list");
    } catch (error) {
      toast.error("them that bai");
    }
  };
  //
  const handleEdit = async (values: ProductInputs) => {
    try {
      await axios.put("/products/" + id, values);
      toast.success("cap nhat thanh cong");
      nav("/admin/product/list");
    } catch (error) {
      toast.error("sua that bai");
    }
  };
  //
  const getAll = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      toast.error("errorsss");
    }
  };
  //
  const getDetail = async (id: string) => {
    try {
      const { data } = await axios.get("/products/" + id);
      setProduct(data);
    } catch (error) {
      toast.error("errorsss");
    }
  };
  //
  const handleDelete = async (id: string) => {
    if (confirm("ban co chac chan muo xoa khong")) {
      try {
        await axios.delete("/products/" + id);
        getAll();
        toast.success("Xoa thanh cong ");
      } catch (error) {
        toast.error("xoa that bai");
      }
    }
  };
  //
  useEffect(() => {
    getAll();
  },[]);
  useEffect(() => {
    if (!id) return;
    getDetail(id);
  }, []);
  //
  return { handleAdd, handleEdit, handleDelete, product, products };
};

export default useProduct;

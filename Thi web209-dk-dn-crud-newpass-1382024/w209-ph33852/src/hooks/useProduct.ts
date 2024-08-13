import axios, { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Product, ProductInputs } from "../types/Product";
import { useEffect, useState } from "react";
///
const useProduct = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [products, setproducts] = useState<Product[]>([]);
  const [product, setproduct] = useState<Product>();
  // Add
  const HandleAdd = async (values: ProductInputs) => {
    try {
      await axios.post("/products", values);
      toast.success("Sản phẩm đã được thêm thành công");
      nav("/admin/product/list");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  /// Edit
  const getEdit = async (values: ProductInputs) => {
    try {
      await axios.put("/products/" + id, values);
      toast.success("Sản phẩm đã được thêm thành công");
      nav("/admin/product/list");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  // List
  const getAllPrd = async () => {
    try {
      const { data } = await axios.get("/products");
      setproducts(data);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  // detail
  const getDetail = async (id: string) => {
    try {
      const { data } = await axios.get("/products/" + id);
      setproduct(data);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  //delete
  const HandleDalete = async (id: string) => {
    if (confirm("Bạn Có chắc chắn muốn xoá không")) {
      try {
        await axios.delete("/products/" + id);
        getAllPrd();
        toast.success("Sản phẩm đã được xóa thành công");
      } catch (error) {
        toast.error((error as AxiosError)?.message);
      }
    }
  };
  //
  useEffect(() => {
    getAllPrd();
  }, []);
  //
  useEffect(() => {
    if (!id) return;
    getDetail(id);
  }, []);
  //
  return { getEdit, HandleAdd, products, HandleDalete, product };
};

export default useProduct;

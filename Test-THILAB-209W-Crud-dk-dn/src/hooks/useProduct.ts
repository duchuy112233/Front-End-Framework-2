import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//////////////////////////////////////
import {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
} from "../apis/product";
import { Product } from "../types/Product";
//////////////////////////////////////

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  //
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        toast.error("Không thể tải danh sách sản phẩm");
      }
    };
    fetchProducts();
  }, []);
  //
  const handleAddProduct = async (product: Product) => {
    try {
      const data = await createProduct(product);
      setProducts((prev) => [...prev, data]);
      toast.success("Thêm sản phẩm thành công");
      navigate("/");
    } catch {
      toast.error("Không thể thêm sản phẩm");
    }
  };
  //
  const handleEditProduct = async (product: Product) => {
    try {
      const data = await updateProduct(product);
      setProducts((prev) => prev.map((p) => (p.id === data.id ? data : p)));
      toast.success("Cập nhật sản phẩm thành công");
      navigate("/");
    } catch {
      toast.error("Không thể cập nhật sản phẩm");
    }
  };
  //
  const handleDeleteProduct = async (id: number | undefined) => {
    if (id === undefined) return;
    try {
      await removeProduct(`${id}`);
      setProducts((prev) => prev.filter((i) => i.id !== id));
      toast.success("Xoá sản phẩm thành công");
    } catch {
      toast.error("Không thể xoá sản phẩm");
    }
  };
  //
  return {
    products,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
  };
};

export default useProducts;

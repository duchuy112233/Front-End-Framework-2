import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
} from "../apis/product";
import { Product } from "../types/Product";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Không thể tải danh sách sản phẩm");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (product: Product) => {
    try {
      const data = await createProduct(product);
      setProducts([...products, data]);
      navigate("/");
    } catch (err) {
      setError("Không thể thêm sản phẩm");
    }
  };

  const handleEditProduct = async (product: Product) => {
    try {
      const data = await updateProduct(product);
      setProducts(products.map((p) => (p.id === data.id ? data : p)));
      navigate("/");
    } catch (err) {
      setError("Không thể cập nhật sản phẩm");
    }
  };

  const handleDeleteProduct = async (id: number | undefined) => {
    if (id === undefined) return;

    const isConfirm = window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
    if (isConfirm) {
      try {
        await removeProduct(`${id}`);
        setProducts(products.filter((i) => i.id !== id));
      } catch (err) {
        setError("Không thể xoá sản phẩm");
      }
    }
  };

  return {
    products,
    loading,
    error,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
  };
};

export default useProducts;

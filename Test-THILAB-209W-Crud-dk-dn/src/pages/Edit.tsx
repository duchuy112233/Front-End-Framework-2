import React, { useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../apis/product";
import { Product } from "../types/Product";
import ProductForm from "../components/ProductForm";

type Props = {
  onEdit: (product: Product) => Promise<void>;
};

const Edit: React.FC<Props> = ({ onEdit }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(Number(id));
        setProduct(data);
      } catch (err) {
        setError("Không thể tải dữ liệu sản phẩm");
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const onSubmit: SubmitHandler<Product> = async (data: Product) => {
    try {
      await onEdit({ ...data, id: Number(id) });
      alert("Sản phẩm được cập nhật thành công!");
      navigate("/"); // Redirect to products list or another relevant page
    } catch (err) {
      setError("Không thể cập nhật sản phẩm");
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl text-center">Product EDIT</h3>
      {product && <ProductForm onSubmit={onSubmit} initialValues={product} />}
    </div>
  );
};

export default Edit;

import React, { useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
//////////////////////////////////////
import { getProduct } from "../apis/product";
import { Product } from "../types/Product";
import ProductForm from "../components/ProductForm";
//////////////////////////////////////

type Props = {
  onEdit: (product: Product) => Promise<void>;
};
//
const Edit: React.FC<Props> = ({ onEdit }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  //
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(Number(id));
      setProduct(data);
    };
    if (id) fetchProduct();
  }, [id]);
  //
  const onSubmit: SubmitHandler<Product> = async (data) => {
    await onEdit({ ...data, id: Number(id) });
    navigate("/");
  };
  //
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl text-center">Edit Product</h3>
      {product && <ProductForm onSubmit={onSubmit} initialValues={product} />}
    </div>
  );
};

export default Edit;

import React from "react";
import { SubmitHandler } from "react-hook-form";
//////////////////////////////////////
import { Product } from "../types/Product";
import ProductForm from "../components/ProductForm";
//////////////////////////////////////

type Props = {
  onAdd: (product: Product) => void;
};
const Add: React.FC<Props> = ({ onAdd }) => {
  const onSubmit: SubmitHandler<Product> = async (data: Product) => {
    await onAdd(data);
  };
  //
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <h3 className="text-3xl text-center">PRODUCT ADD</h3>
        <ProductForm
          onSubmit={onSubmit}
          initialValues={{
            title: "",
            price: 0,
            category: "",
            isShowProduct: true,
          }}
        />
      </div>
    </div>
  );
};

export default Add;

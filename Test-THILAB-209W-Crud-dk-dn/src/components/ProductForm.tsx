import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
//////////////////////////////////////
import { ProductFormParams } from "../types/Product";
//////////////////////////////////////
type ProductFormProps = {
  onSubmit: (values: ProductFormParams) => void;
  initialValues?: ProductFormParams;
  product?: ProductFormParams;
};
//
const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialValues,
  product,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormParams>({
    defaultValues: initialValues,
  });
  //
  const handleFormSubmit: SubmitHandler<ProductFormParams> = async (data) => {
      onSubmit(data);
  };
  //
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Tên sp */}
        <div className="mb-4">
          <label htmlFor="title" className="block">
            Tên sản phẩm
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            id="title"
            placeholder="Tên sản phẩm..."
            {...register("title", { required: "Tên sản phẩm là bắt buộc" })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        {/* Giá */}
        <div className="mb-4">
          <label htmlFor="price" className="block">
            Giá sản phẩm
          </label>
          <input
            type="number"
            className="border border-gray-300 p-2 w-full rounded-md"
            id="price"
            placeholder="0"
            {...register("price", {
              required: "Giá sản phẩm là bắt buộc",
              min: {
                value: 0.01,
                message: "Giá sản phẩm phải lớn hơn 0",
              },
            })}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block">
            Danh mục sản phẩm
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            {...register("category", {
              required: "Danh mục sản phẩm là bắt buộc",
            })}
          >
            <option value="">Chọn danh mục</option>
            <option value="Điện tử">Điện tử</option>
            <option value="Nội thất">Nội thất</option>
          </select>
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </div>
        {/* Is Show */}
        <div className="mb-4">
          <label htmlFor="isShowProduct" className="block">
            Hiển thị sản phẩm
          </label>
          <input
            type="checkbox"
            className="border border-gray-300 p-2 rounded-md"
            id="isShowProduct"
            defaultChecked={product?.isShowProduct}
            {...register("isShowProduct")}
          />
        </div>
        {/* /////////////////////////// */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
        >
          Xác nhận
        </button>
        <Link
          className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md w-full block text-center"
          to="/"
        >
          Huỷ
        </Link>
      </form>
    </div>
  );
};

export default ProductForm;

import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductFormParams } from "../types/Product";
import { validateProductForm } from "./../validation/ValidationForm";

type ProductFormProps = {
  onSubmit: (values: ProductFormParams) => void;
  initialValues?: ProductFormParams;
  product?: ProductFormParams;
};

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
    resolver: async (values) => {
      const errors = validateProductForm(values);
      return { values, errors };
    },
  });

  const handleFormSubmit: SubmitHandler<ProductFormParams> = async (data) => {
    try {
      // Call the onSubmit function with form data
      onSubmit(data);
    } catch (error) {
      // Handle submission error
      console.error("Submit Error:", error);
    }
  };

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
            {...register("title")}
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
            {...register("price")}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        {/* Mô tả */}
        <div className="mb-4">
          <label htmlFor="description" className="block">
            Mô tả
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            id="description"
            placeholder="Mô tả sản phẩm ..."
            {...register("description")}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        {/* Ảnh */}
        <div className="mb-4">
          <label htmlFor="image" className="block">
            Hình ảnh
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            id="image"
            placeholder="Ảnh sản phẩm..."
            {...register("image")}
          />
          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
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
            {...register("category")}
          >
            <option value="">Chọn danh mục</option>
            <option value="Electronics">Điện tử</option>
            <option value="Furniture">Nội thất</option>
            <option value="Clothing">Thời trang</option>
            <option value="Food">Thực phẩm</option>
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

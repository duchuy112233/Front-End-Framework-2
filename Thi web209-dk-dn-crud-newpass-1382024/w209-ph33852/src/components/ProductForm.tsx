import { useForm } from "react-hook-form";
import { Product, ProductInputs } from "../types/Product";
import { useEffect } from "react";
type ProductFormProps = {
  product?: Product;
  onSubmit: (values: ProductInputs) => void;
};
const ProductForm = ({ product, onSubmit }: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInputs>();
  //
  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mt-3 mb-3">
        <label htmlFor="name">Tên sản phẩm</label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Nhập tên sản phẩm"
          {...register("name", {
            required: "Tên sản phẩm là bắt buộc",
            minLength: {
              value: 2,
              message: "Tên sản phẩm phải có ít nhất 2 ký tự",
            },
            maxLength: {
              value: 50,
              message: "Tên sản phẩm không được vượt quá 50 ký tự",
            },
          })}
        />
        {errors.name && (
          <small className="form-text text-danger">{errors.name.message}</small>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="price">Giá</label>
        <input
          id="price"
          type="number"
          className="form-control"
          placeholder="Nhập giá"
          {...register("price", {
            required: "Giá là bắt buộc",
            min: {
              value: 1,
              message: "Giá phải lớn hơn 0",
            },
          })}
        />
        {errors.price && (
          <small className="form-text text-danger">
            {errors.price.message}
          </small>
        )}
      </div>

      <div className="form-group mb-3 form-check">
        <input
          id="isShow"
          type="checkbox"
          className="form-check-input"
          {...register("isShow")}
        />
        <label className="form-check-label" htmlFor="isShow">
          Hiển thị sản phẩm
        </label>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="brand">Danh mục</label>
        <select
          id="brand"
          className="form-select"
          {...register("brand", {
            required: "Danh mục là bắt buộc",
          })}
        >
          <option value="">Chọn danh mục</option>
          <option value="Áo">Áo</option>
          <option value="Quần">Quần</option>
          <option value="Giày">Giày</option>
        </select>
        {errors.brand && (
          <small className="form-text text-danger">
            {errors.brand.message}
          </small>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Gửi
      </button>
    </form>
  );
};

export default ProductForm;

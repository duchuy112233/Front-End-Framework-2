import { useForm } from "react-hook-form";
import { Product, ProductInputs } from "../types/Product";
import { useEffect } from "react";
//
type AuthFormProps = {
  product?: Product;
  onSubmit: (data: ProductInputs) => void;
};
//
const ProductForm = ({ product, onSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInputs>();

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);
  //
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-3 mb-3">
          <label htmlFor="title"> title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Nhập title"
            {...register("title", {
              required: "ko de trong",
              minLength: {
                value: 5,
                message: "Tren 5 ky tu",
              },
            })}
          />
          {errors.title && (
            <small className="form-text text-danger">
              {errors.title.message}{" "}
            </small>
          )}
        </div>
        {/* /// */}
        <div className="form-group mb-3">
          <label htmlFor="image">image</label>
          <input
            type="text"
            id="image"
            className="form-control"
            placeholder="Nhập mật khẩu"
            {...register("image", {
              required: "ko de trong",
              minLength: {
                value: 5,
                message: "Tren 5 ky tu",
              },
            })}
          />
          {errors.image && (
            <small className="form-text text-danger">
              {errors.image.message}{" "}
            </small>
          )}
        </div>
        {/* /// */}
        <div className="form-group mb-3">
          <label htmlFor="price">price</label>
          <input
            type="number"
            id="price"
            className="form-control"
            placeholder="Nhập mật khẩu"
            {...register("price", {
              required: "ko de trong",
              min: {
                value: 0,
                message: "ko aam",
              },
            })}
          />
          {errors.price && (
            <small className="form-text text-danger">
              {errors.price.message}{" "}
            </small>
          )}
        </div>

        <div className="form-group mb-3 form-check">
          <input
            id="isNew"
            type="checkbox"
            className="form-check-input"
            {...register("isNew")}
          />
          <label className="form-check-label" htmlFor="isNew">
            Hiển thị sản phẩm
          </label>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="status">Danh mục</label>
          <select
            id="status"
            className="form-select"
            {...register("status", {
              required: "ko de trong",
            })}
          >
            <option value="">Chọn danh mục</option>
            <option value="Publish"> Publish</option>
            <option value="Draft">Draft</option>
          </select>
          {errors.status && (
            <small className="form-text text-danger">
              {errors.status.message}{" "}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Gửi
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

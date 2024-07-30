import { FieldErrors } from "react-hook-form";  
import { ProductFormParams } from "../types/Product";

export const validateProductForm = (
  values: ProductFormParams
): FieldErrors<ProductFormParams> => {
  const { title, image, category, price, description } = values;
  const errors: FieldErrors<ProductFormParams> = {};

  // Validate title
  if (!title) {
    errors.title = { type: "required", message: "Cần nhập tiêu đề" };
  } else if (title.length < 3) {
    errors.title = { type: "minLength", message: "Cần nhập tối thiểu 3 ký tự" };
  } else if (title.length > 100) {
    errors.title = {
      type: "maxLength",
      message: "Tiêu đề không được vượt quá 100 ký tự",
    };
  }

  // Validate image
  if (!image) {
    errors.image = { type: "required", message: "Cần nhập ảnh" };
  }
  // } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(image)) {
  //   errors.image = { type: "pattern", message: "Ảnh phải có định dạng hợp lệ (jpg, jpeg, png, gif)" };
  // }

  // Validate category
  if (!category) {
    errors.category = { type: "required", message: "Cần chọn danh mục" };
  } else if (category.length < 3) {
    errors.category = {
      type: "minLength",
      message: "Danh mục phải có ít nhất 3 ký tự",
    };
  }

  // Validate price
  if (!price) {
    errors.price = { type: "required", message: "Cần nhập giá" };
  } else if (price <= 0) {
    errors.price = { type: "minValue", message: "Giá phải lớn hơn 0" };
  } else if (!/^[1-9][0-9]*$/.test(price.toString())) {
    errors.price = {
      type: "pattern",
      message: "Giá không được bắt đầu bằng số 0",
    };
  }

  // Validate description
  if (!description) {
    errors.description = { type: "required", message: "Cần nhập mô tả" };
  } else if (description.length < 5) {
    errors.description = {
      type: "minLength",
      message: "Cần nhập tối thiểu 5 ký tự",
    };
  } else if (description.length > 500) {
    errors.description = {
      type: "maxLength",
      message: "Mô tả không được vượt quá 500 ký tự",
    };
  }

  return errors;
};

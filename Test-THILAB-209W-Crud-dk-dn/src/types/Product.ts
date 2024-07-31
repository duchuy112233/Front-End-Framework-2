export type Product = {
  id?: number | string;
  title: string;
  price: number;
  category?: string;
  isShowProduct: boolean;
};
export type ProductFormParams = {
  title: string;
  price: number;
  category?: string;
  isShowProduct: boolean;
};

export type ProductInputs = Omit<Product, "id">;

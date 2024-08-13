export type Product = {
  id?: number | string;
  title: string;
  price: number;
  image?: string;
  description: string;
  category?: string;
  isShowProduct: boolean;
};

export type ProductFormParams = {
  title: string;
  price: number;
  image?: string;
  description: string;
  category?: string;
  isShowProduct: boolean;
};

export type ProductInputs = Omit<Product, "id">;

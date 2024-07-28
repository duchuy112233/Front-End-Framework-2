export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isShowProduct: boolean;
};

export type ProductInputs = Omit<Product, "id">;

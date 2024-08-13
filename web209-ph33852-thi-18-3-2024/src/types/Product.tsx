export type Product = {
  id: string;
  title: string;
  image: string;
  isNew: boolean;
  price: number;
  status: string;
};
export type ProductInputs = Omit<Product, "id">;

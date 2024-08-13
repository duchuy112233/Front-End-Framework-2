export type Product = {
  id: string;
  name: string;
  price: string;
  brand: string;
  isShow: boolean;
};

export type ProductInputs = Omit<Product, "id">;

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type CreateProductInput = {
  name: string;
  price: number;
  stock: number;
};

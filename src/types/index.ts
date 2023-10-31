export type Product = {
  id: string;
  name: string;
  description: string;
  image: string | null;
  price: number;
  stock: number;
  isEnabled: boolean;
  category: {
    name: string;
  };
};

export type Category = {
  id: string;
  name: string;
  image: string | null;
};

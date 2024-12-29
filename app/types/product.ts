export type ProductCategory = 'laptop' | 'desktop' | 'accessory';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
};


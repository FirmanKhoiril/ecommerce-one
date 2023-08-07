export type TCardProduct = {
  name: string;
  price: string;
  normalPrice: string;
  discount: number;
  city: string;
  _id: string;
  image: any;
  details: string;
  tags: [string];
  slug: {
    current: string;
  };
};

export interface ICardProduct {
  name: string;
  price: string;
  normalPrice: string;
  discount: number;
  city: string;
  _id: string;
  details: string;
  image: any;
  tags: [string];
  slug: {
    current: string;
  };
}

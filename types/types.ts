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

export type TBanner = {
  _id: string;
  alt: string;
  bigText: string;
  description: string;
  price: string;
  normalPrice: string;
  backgroundColor: string;
  title: string;
  textColor: string;
  discount: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  buttonLink: string;
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

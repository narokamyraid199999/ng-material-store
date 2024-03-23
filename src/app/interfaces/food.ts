export interface Food {
  isFavarite?: boolean;
  numberOfItem?: number;
  id: number;
  price: number;
  description: string;
  title: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

import { Schema, Document, models, model } from 'mongoose';

interface IProduct extends Document {
  name: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  images: [
    {
      id: { type: String, required: true },
      file: {
        url: { type: String, required: true },
        metadata: { type: String, required: true },
      },
    },
  ],
});

const Product = models.Product || model<IProduct>('Product', ProductSchema); 

export default Product;








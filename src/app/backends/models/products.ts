// models/Product.ts
import { Schema, Document } from 'mongoose';
import { mongoConnectDB } from '../connection';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});


ProductSchema.index({ name: 'text', description: 'text' });

const Products = mongoConnectDB.models.Product || mongoConnectDB.model<IProduct>('Product', ProductSchema);

export default Products

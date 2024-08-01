// services/productService.ts
import Product, { IProduct } from '../models/products';

class ProductService {
  async createProduct(data: Partial<IProduct>): Promise<IProduct> {
     
    const product = new Product(data);
    await product.save();
    return product;
  }

  async getProductById(id: string): Promise<IProduct | null> {
     
    return await Product.findById(id).exec();
  }

  async getProducts(): Promise<IProduct[]> {
     
    return await Product.find().exec();
  }

  async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
     
    return await Product.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteProduct(id: string): Promise<IProduct | null> {
     
    return await Product.findByIdAndDelete(id).exec();
  }

  async searchProducts(query: string): Promise<IProduct[]> {
    const regex = new RegExp(query, 'i');
    return await Product.find({
        $or: [
          { name: { $regex: regex } },
          { description: { $regex: regex } }
        ]
      }).exec();
    
    // ({
    //   $text: { $search: query }
    // }).exec();
  }
}

export default new ProductService();

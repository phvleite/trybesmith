import Joi from 'joi';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async list(): Promise<Product[]> {
    const products = await this.model.list();
    return products;
  }

  public validateProduct = (product: Product) => {
    const schema = Joi.object().keys({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    return schema.validate(product);
  };
}

export default ProductService;

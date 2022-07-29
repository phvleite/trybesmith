import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };

  public list = async (_req: Request, res: Response) => {
    const products = await this.productService.list();
    res.status(200).json(products);
  };
}

export default ProductController;

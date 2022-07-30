import { Request, Response } from 'express';
import ProductService from '../services/products.service';

const messages = [
  {
    message: '"name" is required',
    code: 400,
  },
  {
    message: '"name" must be a string',
    code: 422,
  },
  {
    message: '"name" length must be at least 3 characters long',
    code: 422,
  },
  {
    message: '"amount" is required',
    code: 400,
  },
  {
    message: '"amount" must be a string',
    code: 422,
  },
  {
    message: '"amount" length must be at least 3 characters long',
    code: 422,
  },
];

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const { error, value } = this.productService.validateProduct(req.body);
    if (error) {
      const { message } = error;
      let code = 0;
      messages.forEach((mess) => {
        if (mess.message === message) {
          code = mess.code;
        }
      });
      return res.status(code).json({ message });
    }

    const product = value;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };

  public list = async (_req: Request, res: Response) => {
    const products = await this.productService.list();
    res.status(200).json(products);
  };
}

export default ProductController;

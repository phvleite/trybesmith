import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import messagesErrors from '../services/messages.errors.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const { error, value } = this.productService.validateProduct(req.body);
    if (error) {
      const { message } = error;
      let code = 0;
      messagesErrors.forEach((mess) => {
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

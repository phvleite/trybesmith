import { Router } from 'express';

import ProductController from '../controllers/products.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post(
  '/products', 
  (req, res) => productController.create(req, res),
);

export default productRouter;

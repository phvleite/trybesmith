import { Router } from 'express';

import OrderController from '../controllers/orders.controller';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get(
  '/orders', 
  (req, res) => orderController.list(req, res),
);

export default orderRouter;

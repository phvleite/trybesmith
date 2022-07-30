import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public list = async (_req: Request, res: Response) => {
    const orders = await this.orderService.list();
    res.status(200).json(orders);
  };
}

export default OrderController;

import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async list(): Promise<Order[]> {
    const orders = await this.model.list();
    const listProductIdByOrderId = await this.model.getlistIdByOrderId();

    orders.forEach((order, ind) => {
      const listProductsIds: number[] = [];
      listProductIdByOrderId.forEach((prod) => {
        if (prod.orderId === order.id) {
          listProductsIds.push(prod.id);
          orders[ind].productsIds = listProductsIds;
        }
      });
    });
   
    return orders;
  }
}

export default OrderService;

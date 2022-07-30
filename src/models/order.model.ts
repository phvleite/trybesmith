import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import ListProductIdByOrderId from '../interfaces/listProductIdByOrderId.interface';

const BD = 'Trybesmith';
const TB = 'Orders';
const TBP = 'Products';

class OrderModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  list = async (): Promise<Order[]> => {
    const SQL = `SELECT id, userId FROM ${BD}.${TB};`;
    const result = await this.connection.execute(SQL);
    const [rows] = result;
   
    return rows as Order[];
  };

  getlistIdByOrderId = async (): Promise<ListProductIdByOrderId[]> => {
    // const SQL = `SELECT orderId, id FROM ${BD}.${TBP} WHERE orderId > 0 ORDER BY orderId;`;
    const SQL = `SELECT orderId, id FROM ${BD}.${TBP} ORDER BY id;`;
    const result = await this.connection.execute(SQL);
    const [rows] = result;
    return rows as ListProductIdByOrderId[];
  };
}

export default OrderModel;

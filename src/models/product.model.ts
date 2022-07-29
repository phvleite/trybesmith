import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

const BD = 'Trybesmith';
const TB = 'Products';

class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const SQL = `INSERT INTO ${BD}.${TB} (name, amount) VALUES (?, ?);`;
    const result = await this.connection
      .execute<ResultSetHeader>(SQL, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };

  list = async (): Promise<Product[]> => {
    const SQL = `SELECT * FROM ${BD}.${TB};`;
    const result = await this.connection.execute(SQL);
    const [rows] = result;
    return rows as Product[];
  };
}

export default ProductModel;

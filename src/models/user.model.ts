import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.inteface';
import Token from '../interfaces/token.interface';
import jwtService from '../services/jwt.service';

const BD = 'Trybesmith';
const TB = 'Users';

class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (user: User): Promise<Token> => {
    const { username, classe, level, password } = user;
    const SQL = `INSERT INTO ${BD}.${TB} (username, classe, level, password) VALUES (?, ?, ?, ?);`;
    await this.connection.execute<ResultSetHeader>(SQL, [username, classe, level, password]);
    const token = jwtService.createToken({ username, classe });
    return { token };
  };
}

export default UserModel;

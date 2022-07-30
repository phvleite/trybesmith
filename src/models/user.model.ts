import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.inteface';
import Token from '../interfaces/token.interface';
import jwtService from '../services/jwt.service';
import Login from '../interfaces/login.interface';

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

  login = async (login: Login): Promise<User> => {
    const { username, password } = login;
    const SQL = `SELECT * FROM ${BD}.${TB} WHERE username=? AND password=?;`; 
    const result = await this.connection.execute(SQL, [username, password]);
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  };
}

export default UserModel;

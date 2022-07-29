import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.inteface';
import Token from '../interfaces/token.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<Token> {
    return this.model.create(user);
  }
}

export default UserService;

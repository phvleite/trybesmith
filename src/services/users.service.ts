import * as Joi from 'joi';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.inteface';
import Token from '../interfaces/token.interface';
import Login from '../interfaces/login.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<Token> {
    return this.model.create(user);
  }

  public login(login: Login): Promise<User> {
    return this.model.login(login);
  }

  public validateLogin = (login: Login) => {
    const schema = Joi.object().keys({
      username: Joi.string().required().min(3),
      password: Joi.string().required().min(8),
    });
    return schema.validate(login);
  };

  public validateUser = (user: User) => {
    const schema = Joi.object().keys({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().integer().min(1),
      password: Joi.string().required().min(8),
    });
    return schema.validate(user);
  };
}

export default UserService;

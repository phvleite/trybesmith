import { Request, Response } from 'express';
import Login from '../interfaces/login.interface';
import UserService from '../services/users.service';
import jwtService from '../services/jwt.service';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(201).json(userCreated);
  };

  public login = async (req: Request, res: Response) => {
    const { error, value } = this.userService.validateLogin(req.body);
    if (error) {
      const { message } = error;
      return res.status(400).json({ message });
    }
    const login: Login = value;
    const user = await this.userService.login(login);

    if (!user) {
      const message = 'Username or password invalid';
      return res.status(401).json({ message });
    }

    const { username, classe } = user;
    const token = jwtService.createToken({ username, classe });
    return res.status(200).json({ token });
  };
}

export default UserController;

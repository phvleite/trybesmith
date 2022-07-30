import { Router } from 'express';

import UserController from '../controllers/users.controller';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/users', 
  (req, res) => userController.create(req, res),
);

userRouter.post(
  '/login', 
  (req, res) => userController.login(req, res),
);

export default userRouter;

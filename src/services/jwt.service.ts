import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import IJWT from '../interfaces/jwt.interface';

dotenv.config();

const jwtSecret = String(process.env.JWT_SECRET);

const jwtService = {
  createToken: (data: IJWT) => {
    const token = jwt.sign({ data }, jwtSecret);
    return token;
  },
};

export default jwtService;

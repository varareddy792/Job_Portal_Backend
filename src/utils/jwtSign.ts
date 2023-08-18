
import { Request, response, NextFunction, Response } from 'express';
import 'dotenv/config';
import jwt, { Secret } from 'jsonwebtoken'

export const jwtSign = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.JWT_SECRET === undefined) {
    throw new Error(' JWT secret cannot be undefined')
  };
  const user = req.user;
  if (!user || !user.email) {
    res.status(401).json({ message: 'Unauthorized' });
    next();
  }

  const email = user.email;
  const id = user.id;
  const secretKey: Secret =process.env.JWT_SECRET

  jwt.sign({email,id}, secretKey, { expiresIn: '1h' }, (err, token) => {
    if (err) {
      console.log('error', err);
      res.status(500).json({ message: 'Internal server error' });
      next();
    }
    console.log('token', token)
    res.cookie('token', token);
    res.redirect('http://localhost:3000/homePage');
    // res.json({ token });
    next();
  });
};
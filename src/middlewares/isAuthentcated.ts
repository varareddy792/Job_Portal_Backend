import passport from 'passport';
import { Request,Response,NextFunction } from 'express';
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt');
 
}
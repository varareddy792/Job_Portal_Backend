import { Router } from 'express';
import passport from '../../config/passport';
import { sign, Secret, JwtPayload, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import { jwtSign } from '../../utils/jwtSign';
import { registerUser } from '../../controllers/user/userController';
import { Request } from 'express-jwt';

let JWT_SECRET: Secret;
if (!process.env.JWT_SECRET) {
  throw new Error("cannot be undefined")
} else {
  JWT_SECRET = process.env.JWT_SECRET
};

const signInOptions: SignOptions = {
  // RS256 uses a public/private key pair. The API provides the private key
  // to generate the JWT. The client gets a public key to validate the
  // signature
  expiresIn: '30d'
};
const authRouter = Router();
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
authRouter.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/registration', session: true
  }),
  function (req, res) {
    res.redirect('http://localhost:3000/homePage');
  }
  // jwtSign
)
authRouter.get('/logout', (req: Request, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
  })
  res.send(req.user);
});

authRouter.get('/current_user', passport.authenticate('jwt'), (req, res) => {
  res.send({ data: req.user });
});

authRouter.post('/login', passport.authenticate('local'), jwtSign);

authRouter.post('/register', registerUser);

export default authRouter;
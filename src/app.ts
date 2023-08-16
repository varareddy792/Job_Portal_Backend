import express, { Express, NextFunction, Response } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import router from './routers';
import { errorHandler } from './middlewares/errorHandler';
import { AppDataSource } from './config/typeorm';
import passport from 'passport';
import session from 'express-session';
//import { runSeeders } from 'typeorm-extension';

(async () => {
  AppDataSource.initialize().then(() => {
    console.log('Db connected');
    //runSeeders(AppDataSource);
  }).catch((error) => {
    console.log('Unable to connect to database ', error)
  });

})();

const app: Express = express();
app.use(cors());

// Google Auth and Facebook Auth
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRETEVENTS'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

/// catch 404 and forward to error handler
app.use((req, res, next: NextFunction) => {
  const err = new Error('Invalid API service');
  next(err);
});

app.use(errorHandler)

export default app;


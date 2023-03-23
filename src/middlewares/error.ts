import { NextFunction, Request, Response } from 'express';
import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import User from '../models/user';

const jwtAuthStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET || 'TOP_SECRET',
  },
  (jwt_payload, done) => {
    try {
      const user = User.findOne({
        where: { id: jwt_payload.id },
      });

      if (!user) {
        return done(null, false);
      }

      return done(null, jwt_payload);
    } catch (error) {
      return done(null, false);
    }
  },
);

passport.use(jwtAuthStrategy);

export const authenticate = passport;

export const errorLogger = (error: any, _req: Request, _res: Response, next: NextFunction) => {
  console.error(error);
  next(error);
};

export const errorResponder = (error: any, _req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: error.message });
};
